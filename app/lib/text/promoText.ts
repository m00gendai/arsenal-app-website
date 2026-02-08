interface Promotext{
    title: string | null
    text1: string | null
    list: {text: string }[] | null
    text2: string | null
}

export const promotext: Promotext[] = [
    {
        title: null,
        text1: `Create a <span class="promotext_highlight">collection of your weapons</span>, with photos and many parameters, including`,
        list: [
            {text: `Up to 5 photos with gallery mode`},
            {text: `Caliber (supports multiple per gun, e.g. .357 Magnum, .38 Special) with easy to use selection list`},
            {text: `Acquisition date with calendar selection`},
            {text: `Color with color selection`},
            {text: `Features for weapons according to Swiss Weapons Act Article 5`},
            {text: `Free comments`}
        ],
        text2: `You can also add individual keywords!`
    },
    {
        title: null,
        text1: `Manage your ammunition stock, with photos and many parameters, including`,
        list: [
            {text: `Up to 5 photos, with gallery mode`},
            {text: ` Caliber with easy to use selection list`},
            {text: `Last quantity change with calendar selection or automatically with QuickShot/QuickStock`},
            {text: `Critical quantity`},
            {text: `Free comments`}
        ],
        text2: `Add individual keywords too!`
    },
]