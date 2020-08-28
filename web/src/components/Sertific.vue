<template>
    <div class="block">
        <div class="content">
            <div class="line">
                <div class="sert_block">
                    <div class="image_block">
                        <div class="white_block">
                            <div class="name">Сертификат CЭЗ</div>
                        </div>
                        <img src="@/assets/ser_sez_1.jpg">
                        <img src="@/assets/ser_sez_2.jpg">
                    </div>
                    <a href="@/assets/sert_sez.pdf" download="">Загрузить</a>
                </div>
                <div class="sert_block">
                    <div class="image_block">
                        <div class="white_block">
                            <div class="name">Сертификат ППЗ</div>
                        </div>
                        <img src="@/assets/sert_pp3_1.jpg">
                        <img src="@/assets/sert_pp3_2.jpg">
                        <img src="@/assets/sert_pp3_3.jpg">
                    </div>
                    <a href="@/assets/sert_pp3_1.jpg" download="">Загрузить</a>
                </div>
                <div class="sert_block">
                    <div class="image_block">
                        <div class="white_block">
                            <div class="name">Сертификат ЭЗ Sphera</div>
                        </div>
                        <img src="@/assets/Sphera_Ez_1.jpg">
                        <img src="@/assets/Sphera_Ez_2.jpg">
                        <img src="@/assets/Sphera_Ez_3.jpg">
                    </div>
                    <a href="@/assets/Sphera_EZ.pdf" download="">Загрузить</a>
                </div>
                <div class="sert_block">
                    <div class="image_block">
                        <div class="white_block">
                            <div class="name">Сертификат ЭЗ Sportline</div>
                        </div>
                        <img src="@/assets/Sportline_gig_1.jpg">
                        <img src="@/assets/Sportline_gig_2.jpg">
                    </div>
                    <a href="@/assets/Sportline_EZ.pdf" download="">Загрузить</a>
                </div>
            </div>
            <div class="line">
                 <div class="sert_block">
                    <div class="image_block">
                        <div class="white_block">
                            <div class="name">Сертификат ПБ Sphera</div>
                        </div>
                        <img src="@/assets/Sphera_pozh.jpg">
                    </div>
                    <a href="@/assets/Sphera_pozh.jpg" download="">Загрузить</a>
                </div>
                <div class="sert_block">
                    <div class="image_block">
                        <div class="white_block">
                            <div class="name">Сертификат ПБ Sportline</div>
                        </div>
                        <img src="@/assets/Sportline_pozh_1.jpg">
                        <img src="@/assets/Sportline_pozh_2.jpg">
                    </div>
                    <a href="@/assets/Sportline_pozh.pdf" download="">Загрузить</a>
                </div>
                <div class="sert_block">
                    <div class="image_block">
                        <div class="white_block">
                            <div class="name">Сертификат ПБ Tessera</div>
                        </div>
                        <img src="@/assets/Tessera_1.jpg">
                        <img src="@/assets/Tessera_2.jpg">
                    </div>
                    <a href="@/assets/tessera_pozh.pdf" download="">Загрузить</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'Sertific'
}
</script>

<style lang="sass" scoped>
    .block
        width: 100%
        display: flex
        justify-content: center
        background-color: lighten(#26272b, 6.25%)
        .content
            width: 80%
            .line
                display: flex
                flex-direction: row
                .sert_block
                    margin-top: 6vh
                    width: 20vw
                    height: 65vh
                    .image_block
                        width: 100%
                        height: 95%  
                        position: relative
                        overflow-x: auto
                        .white_block
                            position: absolute
                            width: 100%
                            height: 10%
                            float: bottom
                            background-color: rgba(255,255,255,.6)
                            display: flex
                            justify-content: center
                            .name
                                text-align: center
                                line-height: 6vh
                                font-size: 3vh
                                font-family: "Myriad W08 Light",Arial,sans-serif
                        img
                            width: 100%
                            height: 100%
                    a
                        color: white
                        text-decoration: none
                        float: right
                        font-size: 2.5vh
    ::-webkit-scrollbar 
        width: 12px
    ::-webkit-scrollbar-track 
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3) 
        border-radius: 10px
    ::-webkit-scrollbar-thumb 
        border-radius: 10px
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5)
</style>