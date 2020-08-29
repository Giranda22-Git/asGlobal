<template>
    <div class="block">
        <div class="rgba_block">
            <div class="content">
                <div class="text"><h2>Наша компания занимается поставкой напольных покрытий для объектов здравоохранения, спорта, образования и административного назначения.
                К каждому клиенту осуществляем индивидуальный подход. Мы гарантируем поставки материалов в указанные сроки. Оказываем услуги по монтажу напольных покрытий качественно и с гарантией.</h2>
                </div>
                
               <div class="arrow_block">
                   <a href="/#navCatalog">Перейти к каталогу</a>
                   <a href="/#navCatalog" class="arrow">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
               </div>
                    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.block
    height: 100vh 
    background: url('../assets/cover1.jpg') no-repeat
    background-size: cover
    .rgba_block
        display: flex
        justify-content: center
        height: 100%
        background-color: rgba(0,0,0,0.4)
        .content
            width: 80%
            display: flex
            justify-content: center
            align-items: center  
            flex-direction: column
            .text
                display: flex
                align-items: center
                height: 80vh
                h2
                    color: white
                    text-align: center
            a
                text-decoration: none
                color: white
                font-size: 3.5vh
            .arrow_block
                display: flex
                flex-direction: column
                align-items: center
                .arrow
                    font-size: 10vh
</style>