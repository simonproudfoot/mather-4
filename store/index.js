export const strict = false
export const state = () => ({
    ready: false,
    waiting: true,
    changeKey: 0, // triggers a refresh of components on route change
    currentVideo: '',
    classicShots: [
        {
            yearLocation: '1970 / St Andrews',
            name: 'Doug Sanders',
            thumb: 'shots/screenshot.png',
            video: 'scenario_1/scenario1-driver-question.mp4',
            scenerio: 1,
        },
        {
            yearLocation: '2008 / Royal Birkdale',
            name: 'Padraig Harrington',
            thumb: 'shots/screenshot.png',
            video: 'scenario_2/scenario2-fairwaywood-question.mp4',
            scenerio: 2,
        },
        {
            yearLocation: '2004 / Royal Troon',
            name: 'Todd Hamilton',
            thumb: 'shots/screenshot.png',
            video: 'scenario_3/scenario3-hybrid-question.mp4',
            scenerio: 3
        }, {
            yearLocation: '2009 / Royal Lytham & St Annes',
            name: 'Catriona Matthew',
            thumb: 'shots/screenshot.png',
            video: 'scenario_4/scenario4-iron-question.mp4',
            scenerio: 4
        },
        {
            yearLocation: '2002 / Muirfield',
            name: 'Ernie Els',
            thumb: 'shots/screenshot.png',
            video: 'scenario_5/scenario5-wedge-question.mp4',
            scenerio: 5
        },
        {
            yearLocation: '1995 / St Andrews ',
            name: 'Costantino Rocca',
            thumb: 'shots/screenshot.png',
            video: 'scenario_6/scenario6-putter-question.mp4',
            scenerio: 6
        },
    ],
    clubTypes: [
        {
            name: 'Driver',
            video: 'Driver.mp4',
            image: 'clubs/driver.png',
            text: 'A driver is usually the first club you use on each hole to get the ball as far as possible. To help get the ball in the air you’re also allowed to tee up the ball using a tee. Their large hollow heads and lightweight graphite shafts ensure a fast swing to generate as much power as possible. Be warned though – with speed comes more spin and more wayward shots. Whether a club or Major championship, a drive from the 18th tee can be nerve-wracking for all of us!',
            scenerio: 1,
            scenerio_1: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_1/scenario1-driver-correctanswer.mp4'
            },
            scenerio_2: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_2/scenario2-fairwaywood-wronganswer-driver.mp4'
            },
            scenerio_3: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_3/scenario3-hybrid-wronganswer-driver.mp4'
            },
            scenerio_4: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_4/scenario4-iron-wronganswer-driver.mp4'
            },
            scenerio_5: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_5/scenario5-wedge-wronganswer-driver.mp4'
            },
            scenerio_6: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_6/scenario6-putter-wronganswer-driver.mp4'
            },
        },
        {
            name: 'Fairway Wood',
            video: 'Fairway.mp4',
            image: 'clubs/fairway.png',
            text: 'Fairway Woods are smaller than drivers, but their deep and wide heads are designed to make it easier to strike a ball from the fairway. Like drivers, their shafts are usually lightweight graphite. Fairway woods send the ball long distances, so you might also play a 3 or 5-wood from the tee for a bit more accuracy than a driver.',
            scenerio: 2,
            scenerio_1_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            correctContent: '',
            scenerio_1: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_1/scenario1-driver-wronganswer-fairway.mp4'
            },
            scenerio_2: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_2/scenario2-fairwaywood-correctanswer.mp4'
            },
            scenerio_3: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_3/scenario3-hybrid-wronganswer-fairway.mp4'
            },
            scenerio_4: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_3/scenario3-hybrid-wronganswer-fairway.mp4'
            },
            scenerio_5: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_5/scenario5-wedge-wronganswer-fairway.mp4'
            },
            scenerio_6: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_6/scenario6-putter-wronganswer-fairway.mp4'
            },
        },
        {
            name: 'Hybrid',
            video: 'Hybrid.mp4',
            image: 'clubs/hybrid.png',
            text: 'Hybrid or utility clubs help when you need them most, which is why they’re sometimes known as rescue clubs. Due to their forgiveness they tend to replace a long iron. They combine the distance of long irons with the forgiveness of a fairway wood – and are just as comfortable from the rough as the fairway. In the right hands they can make just about any shot.',
            scenerio: 3,
            correctContent: '',
            scenerio_1: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_1/scenario1-driver-wronganswer-hybrid.mp4'
            },
            scenerio_2: {
                text: '',
                video: 'scenario_1/scenario1-driver-wronganswer-hybrid.mp4'
            },
            scenerio_3: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_3/scenario3-hybrid-correctanswer.mp4'
            },
            scenerio_4: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_4/scenario4-iron-wronganswer-hybrid.mp4'
            },
            scenerio_5: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_5/scenario5-wedge-wronganswer-hybrid.mp4'
            },
            scenerio_6: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_6/scenario6-putter-wronganswer-hybrid.mp4'
            },
        },
        {
            name: 'Mid-Iron',
            video: 'Iron.mp4',
            image: 'clubs/mid-iron.png',
            text: 'Your drive has you on the fairway – now, to approach the green, look to your irons. With their steel heads and shafts, irons are normally heavier than your driver and woods. Irons are divided into long, medium and short irons, relative to how far they send the ball. Long irons with a lower loft punch the ball low and far but are among the hardest clubs to master. Higher lofted mid- and short-irons are good for shorter, accurate shots, flying high and landing softly on the green. Irons allow for amazing creativity depending on the course and conditions.',
            scenerio: 4,
            correctContent: '',
            scenerio_1: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_1/scenario1-driver-wronganswer-iron.mp4'
            },
            scenerio_2: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_2/scenario2-fairwaywood-wronganswer-iron.mp4'
            },
            scenerio_3: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_3/scenario3-hybrid-wronganswer-iron.mp4'
            },
            scenerio_4: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_4/scenario4-iron-correctanswer.mp4'
            },
            scenerio_5: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_5/scenario5-wedge-wronganswer-iron.mp4'
            },
            scenerio_6: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_6/scenario6-putter-wronganswer-iron.mp4'
            },
        },
        {
            name: 'Sand Wedge',
            video: 'Wedge.mp4',
            image: 'clubs/sand-wedge.png',
            text: 'The high loft on wedges get your ball in the air and out of trouble. As their name suggests, sand wedges are for escaping bunkers. Pitching and lob wedges help you chip or pitch the ball short distances, over hazards or out of the rough. The spin generated by your wedges’ high loft lets you control the ball’s movement on the green, cutting it back or stopping it dead.',
            scenerio: 5,
            correctContent: '',
            scenerio_1: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_1/scenario1-driver-wronganswer-wedge.mp4'
            },
            scenerio_2: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_2/scenario2-fairwaywood-wronganswer-wedge.mp4'
            },
            scenerio_3: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_3/scenario3-hybrid-wronganswer-wedge.mp4'
            },
            scenerio_4: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_4/scenario4-iron-wronganswer-wedge.mp4'
            },
            scenerio_5: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_5/scenario5-wedge-correctanswer.mp4'
            },
            scenerio_6: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_6/scenario6-putter-wronganswer-wedge.mp4'
            },
        },
        {
            name: 'Putter',
            video: 'Putter.mp4',
            image: 'clubs/putter.png',
            text: 'You’re on the green but now the pressure is really on. Putters come in all shapes and sizes but always with the same role – to get the ball in the hole. Near or far, you’ll use this club more than any other in the bag, so a keen eye and a steady hand are a must. But beware the dreaded yips!',
            scenerio: 6,
            correctContent: '',
            scenerio_1: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_1/scenario1-driver-wronganswer-putter.mp4'
            },
            scenerio_2: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_2/scenario2-fairwaywood-wronganswer-putter.mp4'
            },
            scenerio_3: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_3/scenario3-hybrid-wronganswer-putter.mp4'
            },
            scenerio_4: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_4/scenario4-iron-wronganswer-putter.mp4'
            },
            scenerio_5: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_5/scenario5-wedge-wronganswer-putter.mp4'
            },
            scenerio_6: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                video: 'scenario_6/scenario6-putter-correctanswer.mp4'
            },
        }
    ]
})
export const actions = {
    async resetScreen({ commit }) {
        try {
            commit('setChangeKey')
        } catch (e) {
        } finally {
            console.log('done')
        }
    }
}
export const getters = {
    ready: state => state.ready,
    waiting: state => state.waiting,
    clubTypes: state => state.clubTypes,
    classicShots: state => state.classicShots,
    changeKey: state => state.changeKey,
    currentVideo: state => state.currentVideo
}
export const mutations = {
    setReady(state, val) {
        state.ready = val
    },
    setWaiting(state, val) {
        state.waiting = val
    },
    setChangeKey(state) {
        state.changeKey++
    },
    setCurrentVideo(state, val) {
        state.currentVideo = val
    }
}