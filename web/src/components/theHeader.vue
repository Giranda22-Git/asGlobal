<template>
    <div class="font">
        <div class="nav">
            <div class="logo"><router-link to="/" class="logoHref"></router-link></div>
            <nav class="menu">
                <li class="menuItem"><a href="/#navAbout">О Нас</a></li>
                <li class="menuItem"><router-link to="/sert">Сертификаты</router-link></li>
                <li class="menuItem"><a href="/#navCatalog">Каталог</a></li>
                <li class="menuItem"><a href="/#navContacts">Контакты</a></li>
                <li class="menuItem"><a href='tel:' class="tel">+7 (701) 533 91 95</a></li>
            </nav>
            <div class="iconMobile" @click="mobileVision">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <div v-show="isMobileVision" class="menuMobile">
                    <li class="menuItem"><a href="/#navAbout">О Нас</a></li>
                    <li class="menuItem"><router-link to="/sert">Сертификаты</router-link></li>
                    <li class="menuItem"><a href="/#navCatalog">Каталог</a></li>
                    <li class="menuItem"><a href="/#navContacts">Контакты</a></li>
                    <li class="menuItem"><a href='tel:' class="tel">+7 (701) 533 91 95</a></li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        isMobileVision: false
    }),
    methods: {
        mobileVision() {
            if(this.isMobileVision)
                this.isMobileVision = false
            else this.isMobileVision = true
        }
    }
}
</script>

<style lang="sass" scoped>
    $headerColor: #26272b
    $fontColor: white
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
        
    .font
        height: 7vh
        background-color: $headerColor
        width: 100%
        position: fixed
        z-index: 15
        top: 0
        left: 0
        display: flex
        justify-content: center

        .nav
            width: 83%
            height: 100%
            display: flex
            justify-content: space-between
            white-space: nowrap

            .logo
                background: url('../assets/A&S.png') center no-repeat
                background-size: cover
                height: auto
                width: 13vh
                .logoHref
                    display: block
                    height: 100%

            .iconMobile
                position: relative
                cursor: pointer
                line-height: 9vh
                display: none
                .menuMobile
                    list-style: none
                    height: auto
                    width: 40vw
                    text-align: left
                    background-color: $headerColor
                    position: absolute
                    right: 0
                    top: 100%
                    font-size: 4.7vw
                    padding: 30%
                    & *
                        border-bottom: 1px solid silver
                        line-height: 4.7vh
                    a
                        text-decoration: none !important
                        color: $fontColor
                        display: block

                    & *:hover
                        color: darken(silver, 10%)

            .menu
                display: flex
                color: $fontColor
                list-style: none
                width: 50%
                flex-direction: row
                justify-content: space-evenly
                align-items: center
                & *:hover
                    color: darken(silver, 10%) !important

                .menuItem
                    margin-right: 5%
                    font-size: 2.2vh
                    cursor: pointer
                    a
                        color: $fontColor
                        text-decoration: none
                        font-family: 'Roboto Condensed', sans-serif;
                        font-weight: 400
                        letter-spacing: .15em
                        position: relative
                        &:before
                            content: ''
                            position: absolute
                            left: 0
                            bottom: 0
                            width: 0%
                            height: 1px
                            background-color: white
                            transition: .5s
                        &:hover:before
                            width: 100%

                    .tel
                        text-decoration: underline
                        &:before
                            content: ''
                            display: none
    @media (min-width: 0px) and (max-width: 600px)
        .iconMobile
            display: block !important
            font-size: 9vw
            color: white
        .menu
            display: none !important
</style>