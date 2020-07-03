<template>
    <div class="font">
        <div class="nav">
            <div class="logo"><router-link to="/" class="logoHref"></router-link></div>
            <nav class="menu">
                <li class="menuItem">О Нас</li>
                <li class="menuItem"><router-link to="/catalog">Каталог</router-link></li>
                <li class="menuItem">Контакты</li>
                <li class="menuItem"><a href='tel:' class="tel">8 (777) 777 77 77</a></li>
            </nav>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
    })
}
</script>

<style lang="sass" scoped>
    $headerColor: #26272b
    $fontColor: white
    .font
        height: 5vh
        background-color: $headerColor
        width: 100%
        top: 0
        left: 0

        .logo
            background: url('../assets/A&S.png') center no-repeat
            background-size: cover
            height: auto
            width: 6vh

            .logoHref
                display: block
                height: 100%
        .nav
            max-width: 1280px
            margin: auto
            height: 100%
            display: flex
            flex-direction: row
            justify-content: space-between

            .menu
                display: flex
                color: $fontColor
                list-style: none
                width: 50%
                flex-direction: row
                justify-content: space-evenly
                align-items: center

                .menuItem
                    margin-right: 5%
                    font-size: 2vh
                    cursor: pointer
                    a
                        color: $fontColor
                        text-decoration: none
                    .tel
                        text-decoration: underline
                        
                    
                    






</style>