import { readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';

export const config = () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  database: {
    mongoDB: process.env.MONGODB_URL,
  },
});

export const configYAML = () => {
  const YAML_CONFIG_URI = 'config.yaml';
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_URI), 'utf8'),
  ) as Record<string, any>;
};

export default configYAML;