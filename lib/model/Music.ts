

export interface Music{
    author: string,
    title: string,
    id: string
}

export interface MusicPresentation{
    music: Music,
    downloadUrl: string
}