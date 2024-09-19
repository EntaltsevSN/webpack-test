export interface EnvVariables {
  mode: 'production' | 'development',
  port: 4000 | any,
  analyzer: true | false,
  platform: 'desktop' | 'mobile'
}