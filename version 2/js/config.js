var config = 
{    
    /*
        Do we want to show the image?
        Note that imageSize still affects the size of the image and where the progressbars are located.
    */
    enableImage: true,

    /* 
        Relative path the the logo we want to display.
    */
    image: "img/logo.png",

    /*
        How big should the logo be?
        The values are: [width, height].
        Recommended to use square images less than 1024px.
    */
    imageSize: [512, 512],

    /*
        Define the progressbar type
            0 = Single progressbar
            1 = Multiple progressbars
            2 = Collapsed progressbars
     */
    progressBarType: 1,

    /*
        Here you can disable some of progressbars.
        Only applys if `singleProgressbar` is false.
    */
    progressBars:
    {
        "INIT_CORE": {
            enabled: false, //NOTE: Disabled because INIT_CORE seems to not get called properly. (race condition).
        },

        "INIT_BEFORE_MAP_LOADED": {
            enabled: true,
        },

        "MAP": {
            enabled: true,
        },

        "INIT_AFTER_MAP_LOADED": {
            enabled: true,
        },

        "INIT_SESSION": {
            enabled: true,
        }
    },

    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slowly fade in and out, each time with another message.
        You can use UTF-8 emoticons inside loading messages! 
    */
    loadingMessages: 
    [
        "Lade Spiel ... &#x231b;",
        "Achte auf dein Char ... &#x1f40c;",
        "Vergiss nicht dein Haustier zu füttern ... &#x1F415;",
        "Vergiss nicht, deine Papiere zu machen ... &#x1F4C3;",
        "Verkünde deine Absichten immer so gut du kannst ... &#x1F46E;"
    ],

    /*
        Rotate the loading message every 5000 milliseconds (default value).
    */
    loadingMessageSpeed: 5 * 1000,

    /*
        Array of music id's to play in the loadscreen.
        Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link.
        https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
        
        Do not use videos that:
            - Do not allow embedding.
            - Copyrighted music (youtube actively blocks this).
    */
    music:
    [
       "kBOu5foIh0A", "RMir51vJrm8", "mJcRMyGta-Y", "xpPoUZ2Y2co", "Xu_fF6YBj0U", "YF0qJa4ZpO4", "9kteZn_O0Fo", "8pm_KoguqPM", "vj2b3ct9Kmw", "6vfP_4u7zik", "Qx1wSkrUr40",
       "Ao2LuHEcMzc", "GAgOYNWHGl8", "zjq2wOpD8vE", "R9ujyfzmGt4", "ASdGtWSK6EU", "HIqfQ-khI5s", "HSC9cgvtkRs", "9ZrAYxWPN6c", "UbJ7tEA-QXk", "mpvsGIwafkI", "x7yPhExdj3E",
       "H9NuWEeODew", "5-xhpcgBMe4", "dv13gl0a-FA", "jzy2dgEUOhY", "WNeLUngb-Xg", "YP0JEcCK3Fw"
    ],


    /*
        Set to false if you do not want any music.
    */
    enableMusic: true,

    /*
        Default volume for the player. Please keep this under 50%, to not blowout someones eardrums x)
     */
    musicVolume: 20,

    /*
        Should the background change images?
        True: it will not change backgrounds.
        False: it will change backgrounds.
    */
    staticBackground: false,
    
    /*
        Array of images you'd like to display as the background.
        Provide a path to a local image, using images via url is not recommended.
    */
    background: 
    [
        "img/bg1.jpg",
        "img/bg2.jpg",
        "img/bg3.jpg",
        "img/bg4.jpg",
        "img/bg5.jpg",
        "img/bg6.jpg",
        "img/bg7.jpg",
        "img/bg8.jpg"
    ],

    /*
        Time in milliseconds on how fast the background
        should swap images.
     */
    backgroundSpeed: 10 * 1000,
}
