<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="centered-button">
          <ion-button @click="getCoinData()">Refresh</ion-button>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
          <div v-for="item in data.data" :key="item.id">
            <div class="row">
              <div class="container-type-1" style="width: 20%">
                <div style="font-size: 12px">Rank</div>
                <div>{{ item.rank }}</div>
              </div>
              <div class="container-type-2" style="width: 40%">
                <div style="font-size: 12px">{{ item.name }}</div>
                <div>{{ item.symbol }}</div>
              </div>
              <div class="container-type-2" style="width: 40%">
                <div style="font-size: 12px">USD</div>
                <div>{{ item.price_usd }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton } from "@ionic/vue";
import { fetchData } from "../services/apiService";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonButton },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  async created() {
    this.getCoinData();
  },
  methods: {
    async getCoinData() {
      this.error = null;
      this.loading = true;
      try {
        this.data = await fetchData();
      } catch (error) {
        this.error = "Failed to load data";
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style scoped>
.centered-button {
  display: flex;
  justify-content: center;
}
.row {
  display: flex;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: row;
  background-color: lightgoldenrodyellow;
  border-style: solid;
  border-color: darkgoldenrod;
  border-width: 1px 1px 0px 1px;
}
.container-type-1 {
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.container-type-2 {
  width: 40%;
  display: flex;
  flex-direction: column;
}
</style>
