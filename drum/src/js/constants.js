const POWER = 'power';
const BANK = 'bank';
const DISPLAY = 'display';
const VOLUME = 'volume';

const keys = [
    {
        key: 'Q',
        code: 81,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
                        display: 'Heater-1'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
                        display: 'Chord-1'
                }
            }
    },
    {
        key: 'W',
        code: 87,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
                        display: 'Heater-2'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
                        display: 'Chord-2'
                }
            }
    },
    {
        key: 'E',
        code: 69,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
                        display: 'Heater-3'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
                        display: 'Chord-3'
                }
            }
    },
    {
        key: 'A',
        code: 65,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
                        display: 'Heater-4'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
                        display: 'Shaker'
                }
            }
    },
    {
        key: 'S',
        code: 83,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
                        display: 'Clap'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
                        display: 'Open-HH'
                }
            }
    },
    {
        key: 'D',
        code: 68,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
                        display: 'Open-HH'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
                        display: 'Closed-HH'
                }
            }
    },
    {
        key: 'Z',
        code: 90,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
                        display: 'Kick-n\'-Hat'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
                        display: 'Punchy-Kick'
                }
            }
    },
    {
        key: 'X',
        code: 88,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
                        display: 'Kick'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
                        display: 'Side-Stick'
                }
            }
    },
    {
        key: 'C',
        code: 67,
        bank: {
                1: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
                        display: 'Closed-HH'
                }, 
                2: {
                        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
                        display: 'Snare'
                }
            }
    },
];

const switches =  [
    {
        power:  [
                    {
                        code: 'O',
                        value: false, 
                        display: 'Power OFF'
                    },
                    {
                        code: 'I',
                        value: true,
                        display: 'Power ON'
                    }
                ],
        bank:   [
                    {
                        code: 1, 
                        value: false,                        
                        display: 'Bank 1: Heater Kit'
                    },
                    {
                        code: 2, 
                        value: true,                        
                        display: 'Bank 2: Smooth Piano Kit'
                    }
                ]
    }
];