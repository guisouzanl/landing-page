export type LogoProps = {
    url: string
    alternativeText: string
}

export type LogoPropsAttributes = {
    attributes: LogoProps
}

export type LogoPropsData = {
    data: LogoPropsAttributes
}

export type LandingPageProps = {
    logo: LogoPropsData
}