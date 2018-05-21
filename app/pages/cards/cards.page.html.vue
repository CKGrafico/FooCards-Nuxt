<template>
    <section class="p-cards">
        <button type="button" class="btn btn-primary mt-2 mr-2 float-right" @click="onClickBuy">(+) Coins</button>
        <ul class="p-cards-list">
            <li class="p-cards-item" v-for="(card, index) in list" :key="index">
                <card v-model="list[index]"/>
                <span class="p-cards-remove" @click="onClickRemove(card)">x</span>
            </li>
        </ul>
    </section>
</template>