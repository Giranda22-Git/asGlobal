<template>
    <div class="block">
        <form class="Panel_block" action="http://localhost:3000" method="post">
            <h1>Вход в панель администратора</h1>
            <div class="login">
                <h1>Логин</h1>
                <input v-model="login" type="text" id="login" name="login">
            </div>
            <div class="password">
                <h1>Пароль</h1>
                <input v-model="password" type="password" id="password" name="password">
            </div>
            <input type="submit" value="Зайти">
        </form>
    </div>
</template>

<script>
export default {
    name: 'adminPanel',
    data: () => ({
        login: '',
        password: ''
    })

}
</script>

<style lang="sass" scoped>
.block
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    background-color: lighten(#26272b, 6.25%)
    .Panel_block
        width: 45%
        height: 25%
        background-color: lighten(#26272b, 2.5%)
        display: flex
        flex-direction: column
        align-items: center
        h1
            text-align: center
            color: white
            font-size: 1.5vw
        .login
            height: 30%
            width: 30%
            h1
                font-size: 1.5vw
        .password
            height: 30%
            width: 30%
            h1
                font-size: 1.5vw
</style>