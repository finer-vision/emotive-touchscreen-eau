export default {
    //Pdf
    smpc: {
        //Page
        0: {
            //Link
            0: {
                width: 17.5,
                top: 13.5,
                left: 7,
                height: 1.4,
                to: 1
            },
            1: {
                width: 17.5,
                top: 13.5+1.5,
                left: 7,
                height: 1.4,
                to: 18
            },
            2: {
                width: 17.5,
                top: 13.5+(1.5*2),
                left: 7,
                height: 1.4,
                to: 26
            },
            3: {
                width: 17.5,
                top: 13.5+(13),
                left: 7,
                height: 1.4,
                to: 32
            },
            4: {
                width: 12,
                top: 13.5+(22),
                left: 7,
                height: 1.4,
                to: 52
            },
            5: {
                width: 12,
                top: 13.5+(31),
                left: 7,
                height: 1.4,
                to: 65
            },
            6: {
                width: 12,
                top: 13.5+(39),
                left: 7,
                height: 1.4,
                to: 93
            }
        },
    },
    keydata: {
        0: {
            0: {
                width: 4,
                top: 60.3,
                left: 7,
                height: 3,
                to: 4
            },
            1: {
                width: 4,
                top: 76,
                left: 7,
                height: 3,
                to: 4
            },
        },
        1: {
            0: {
                width: 4,
                top: 58.3,
                left: 42,
                height: 3,
                to: 5
            }
        },
        2: {
            0: {
                width: 4,
                top: 27,
                left: 88.2,
                height: 3,
                to: 5
            }
        },
        4: {
            0: {
                width: 4,
                top: 27,
                left: 88.2,
                height: 3,
                to: 5
            },
            1: {
                width: 20,
                top: 83.5,
                left: 7,
                height: 3,
                to: 0
            }
        },
        5: {
            0: {
                width: 16,
                top: 45,
                left: 77,
                height: 3,
                to: 1
            },
            1: {
                width: 20,
                top: 86,
                left: 75,
                height: 3,
                to: 1
            }
        },
        
    },
    oabinmen: {
        0: {
            0: {
                width: 25,
                top: 0,
                left: 0,
                height: 5,
                to: 2
            },
            1: {
                width: 25,
                top: 0,
                left: 25,
                height: 5,
                to: 6
            },
            2: {
                width: 25,
                top: 0,
                left: 50,
                height: 5,
                to: 11
            },
        },
        1: {
            0: {
                width: 33,
                top: 42,
                left: 0,
                height: 5,
                to: 2
            },
            1: {
                width: 33,
                top: 42,
                left: 33,
                height: 5,
                to: 6
            },
            2: {
                width: 33,
                top: 42,
                left: 67.5,
                height: 5,
                to: 11
            },
        },
        13: {
            0: {
                width: 4,
                top: 8.3,
                left: 71,
                height: 3,
                to: 18
            },
            1: {
                width: 4,
                top: 82,
                left: 89,
                height: 3,
                to: 18
            },
        },
        18: {
            0: {
                width: 20,
                top: 84.3,
                left: 5,
                height: 3,
                to: 13
            },
        }
    },
    oabin65: {
        0: {
            0: {
                width: 33,
                top: 0,
                left: 0,
                height: 5,
                to: 2
            },
            1: {
                width: 33,
                top: 0,
                left: 33,
                height: 5,
                to: 6
            },
        },
        1: {
            0: {
                width: 50,
                top: 63,
                left: 0,
                height: 5,
                to: 2
            },
            1: {
                width: 50,
                top: 63,
                left: 50,
                height: 5,
                to: 6
            },
        },
        5: {
            0: {
                width: 4,
                top: 33.3,
                left: 44,
                height: 3,
                to: 13
            },
        },
    },
    cvsafety: {
        1: {
            0: {
                width: 4,
                top: 53.3,
                left: 89,
                height: 3,
                to: 6
            },
        },
        2: {
            0: {
                width: 4,
                top: 37.3,
                left: 89,
                height: 3,
                to: 7
            },
        },
        6: {
            0: {
                width: 20,
                top: 85.3,
                left: 4,
                height: 3,
                to: 1
            },
        },
        7: {
            0: {
                width: 17,
                top: 10.3,
                left: 20,
                height: 3,
                to: 8
            },
            1: {
                width: 17,
                top: 10.3,
                left: 40,
                height: 3,
                to: 2
            },
        },
        8: {
            0: {
                width: 17,
                top: 10.3,
                left: 20,
                height: 3,
                to: 7
            },
            1: {
                width: 17,
                top: 10.3,
                left: 40,
                height: 3,
                to: 2
            },
        },
    },
} as {
    [key: string]: {
        [key: number]: {
            [key: number]: {
                width: number;
                top: number;
                left: number;
                height: number;
                to: number
            }
        }
    }
}