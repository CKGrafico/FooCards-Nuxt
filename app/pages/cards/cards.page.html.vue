<template>
    <section class="p-cards">
        <ul>
            <li v-for="(card, index) in list" :key="index">
                <card v-model="card.avatar"/>
            </li>
        </ul>
    </section>
</template>