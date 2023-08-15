
type BuildMode = 'production' | 'development'

export interface BuildPath {
    entry: string;
    html: string;
    build: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath,
    isDev: boolean,
    port: number
}