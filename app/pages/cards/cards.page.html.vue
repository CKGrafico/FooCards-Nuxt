<template>
    <section class="p-cards">
        <ul>
            <li v-for="(card, index) in list" :key="index">
                <card v-model="card.avatar"/>
                <span @click="onClickRemove(card)">X</span>
            </li>
        </ul>
    </section>
</template>