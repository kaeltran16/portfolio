export const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    mobileXL: 675,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
};

export const device = {
    mobileS: `(min-width: ${size.mobileS}px) and (max-width: ${size.tablet - 1}px)`,
    mobileM: `(min-width: ${size.mobileM}px)`,
    mobileL: `(min-width: ${size.mobileL}px)`,
    mobileXL: `(max-width: ${size.mobileXL}px)`,
    tablet: `(min-width: ${size.tablet}px) and (max-width: ${size.laptop - 1}px)`,
    laptop: `(min-width: ${size.laptop}px) and (max-width: ${size.laptopL - 1}px)`,
    laptopL: `(min-width: ${size.laptopL}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
    desktopL: `(min-width: ${size.desktop}px)`
};