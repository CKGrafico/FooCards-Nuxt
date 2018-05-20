import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component({
    middleware: 'secured'
})
export default class TrainingPage extends Vue {
}