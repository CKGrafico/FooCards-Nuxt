<template>
    <section class="p-training mt-4">
        <ul class="p-training-list">
            <!-- WOW super hacker you're watching the values :O -->
            <li class="p-training-item" v-for="(card, index) in botCards" :key="index">
                <div class="p-training-card p-training-card--bot" :class="{'is-selected': isBotCardActive(card), 'is-fighting': isFighting(card)}" @click="onClickBotCard(card)">
                    <card v-model="botCards[index]" small/>
                </div>
            </li>
        </ul>

        <span class="p-training-hr">
            <button class="p-training-send btn btn-primary" :disabled="!areCardsSelected" @click="onClickFight">FIGHT!</button>
        </span>

        <ul class="p-training-list">
            <li class="p-training-item" v-for="(card, index) in userCards" :key="index">
                <div class="p-training-card" :class="{'is-selected': isUserCardActive(card)}" @click="onClickUserCard(card)">
                    <card v-model="userCards[index]" small/>
                </div>
            </li>
        </ul>
    </section>
</template>