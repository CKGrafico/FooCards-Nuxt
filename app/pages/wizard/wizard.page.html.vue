<template>
    <section class="p-wizard">
        <avatar class="p-wizard-avatar" :eyes="avatar.eyes" :nose="avatar.nose" :mouth="avatar.mouth" :color="avatar.color" />

        <div class="p-wizard-form">
            <div class="p-wizard-controls">
                <choicer :items="faceParts.eyes" v-model="avatar.eyes" />
                <choicer :items="faceParts.nose" v-model="avatar.nose" />
                <choicer :items="faceParts.mouth" v-model="avatar.mouth" />
            </div>

            <button type="button" class="p-wizard-send btn btn-primary mt-2" @click="onClickSave" :disabled="!haveCoins">Add card</button>
        </div>
    </section>
</template>