<template>
    <section class="p-training mt-4">
        <ul class="p-training-list">
            <!-- WOW super hacker you're watching the values :O -->
            <li class="p-training-item" v-for="(card, index) in botCards" :key="index">
                <div class="p-training-card p-training-card--bot" :class="{'is-selected': isBotCardActive(card), 'is-fighting': isFightingBot(card)}" @click="onClickBotCard(card)">
                    <card v-model="botCards[index]" small/>
                </div>
            </li>
        </ul>

        <span class="p-training-hr">
            <button v-if="!isFightingTurn" class="p-training-send btn btn-primary" :disabled="!areCardsSelected" @click="onClickFight">
                {{botScore}} - FIGHT - {{userScore}} 
            </button>

            <button v-if="isFightingTurn" class="p-training-send btn btn-primary">
                <loading bright size="6" />
            </button>
        </span>

        <ul class="p-training-list">
            <li class="p-training-item" v-for="(card, index) in userCards" :key="index">
                <div class="p-training-card" :class="{'is-selected': isUserCardActive(card), 'is-fighting': isFightingUser(card)}" @click="onClickUserCard(card)">
                    <card v-model="userCards[index]" small/>
                </div>
            </li>
        </ul>

        <div v-if="isFinished">
            The game have finished! Your score was {{userScore}} and the bot score was {{botScore}}, <nuxt-link :to="localePath('cards')"> create more cards!!</nuxt-link>
        </div>
    </section>
</template>