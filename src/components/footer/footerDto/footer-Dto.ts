export declare interface IFooter{
    logo: Ilogo
    links: Ilinks[]
    socialMLinks: IsocialLinks[]
}

export declare interface Ilogo{
    image: string
    description: string
}

export declare interface Ilinks{
    title: string
    url: string
}

export declare interface IsocialLinks{
    icon: string
    url: string
}