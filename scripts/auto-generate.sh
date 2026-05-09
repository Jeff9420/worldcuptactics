#!/bin/bash
# 自动生成文章 + 检测变化 + commit + push
# 由 cron 定时调用，无需人工干预

SCRIPT_DIR="$HOME/worldcuptactics"
ENV_FILE="$SCRIPT_DIR/.env.local"
LOG_FILE="$SCRIPT_DIR/scripts/auto-generate.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')

echo "[$TIMESTAMP] 开始自动生成..." >> "$LOG_FILE"

# 加载环境变量
if [ ! -f "$ENV_FILE" ]; then
  echo "[$TIMESTAMP] ❌ 缺少 $ENV_FILE，退出" >> "$LOG_FILE"
  exit 1
fi

source "$ENV_FILE"

if [ -z "$OPENAI_API_KEY" ]; then
  echo "[$TIMESTAMP] ❌ OPENAI_API_KEY 未设置，退出" >> "$LOG_FILE"
  exit 1
fi

cd "$SCRIPT_DIR"

# 记录生成前的 articles.ts hash
BEFORE=$(md5 -q app/lib/articles.ts 2>/dev/null || md5sum app/lib/articles.ts | cut -d' ' -f1)

# 运行生成脚本
node scripts/generate-articles.mjs >> "$LOG_FILE" 2>&1

# 检查文件是否有变化
AFTER=$(md5 -q app/lib/articles.ts 2>/dev/null || md5sum app/lib/articles.ts | cut -d' ' -f1)

if [ "$BEFORE" = "$AFTER" ]; then
  echo "[$TIMESTAMP] ✅ 无新内容，跳过 commit" >> "$LOG_FILE"
  exit 0
fi

# 有新文章，自动 commit + push
ARTICLE_COUNT=$(grep -c 'slug:' app/lib/articles.ts)
git add app/lib/articles.ts
git commit -m "feat: auto-generate articles [$(date '+%Y-%m-%d')] — ${ARTICLE_COUNT} total" \
  --author="Claude Automation <noreply@anthropic.com>" >> "$LOG_FILE" 2>&1
git push origin main >> "$LOG_FILE" 2>&1

echo "[$TIMESTAMP] 🚀 新文章已推送上线" >> "$LOG_FILE"
