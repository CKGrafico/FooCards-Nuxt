<template>
    <section class="p-cards">
        <button @click="onClickBuy">Buy coins</button>
        <ul class="p-cards-list">
            <li class="p-cards-item" v-for="(card, index) in list" :key="index">
                <card v-model="list[index]"/>
                <span class="p-cards-remove" @click="onClickRemove(card)">x</span>
            </li>
        </ul>
    </section>
</template>