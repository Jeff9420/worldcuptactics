CREATE TABLE IF NOT EXISTS matches (
    id TEXT PRIMARY KEY,
    tournament TEXT NOT NULL,
    year INTEGER NOT NULL,
    stage TEXT NOT NULL,
    date TEXT NOT NULL,
    venue TEXT NOT NULL,
    city TEXT NOT NULL,
    status TEXT NOT NULL,
    penalty_score TEXT,
    meta_description TEXT,
    tactical_analysis TEXT,
    historical_significance TEXT,
    
    -- Home Team
    home_name TEXT NOT NULL,
    home_flag TEXT NOT NULL,
    home_formation TEXT NOT NULL,
    home_color TEXT NOT NULL,
    home_color_dim TEXT NOT NULL,
    home_score INTEGER NOT NULL,
    home_xg NUMERIC NOT NULL,
    home_possession INTEGER NOT NULL,
    
    -- Away Team
    away_name TEXT NOT NULL,
    away_flag TEXT NOT NULL,
    away_formation TEXT NOT NULL,
    away_color TEXT NOT NULL,
    away_color_dim TEXT NOT NULL,
    away_score INTEGER NOT NULL,
    away_xg NUMERIC NOT NULL,
    away_possession INTEGER NOT NULL,
    
    -- JSONB fields for nested data
    home_players JSONB NOT NULL DEFAULT '[]',
    away_players JSONB NOT NULL DEFAULT '[]',
    timeline JSONB NOT NULL DEFAULT '[]',
    stats JSONB NOT NULL DEFAULT '[]',
    key_moments JSONB NOT NULL DEFAULT '[]',
    top_performers JSONB NOT NULL DEFAULT '[]',
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_matches_updated_at
    BEFORE UPDATE ON matches
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
