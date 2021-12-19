  <template>
  <view>
    <u-search
      class="bar"
      placeholder="高達Exia"
      shape="round"
      v-model="value"
      :animation="true"
      :action-style="$styles.searchButton"
      :border-color="$styles.primary"
      :clearable="true"
      :disabled="disabled"
      :show-action="true"
      @search="$emit('search', value)"
      @click="$emit('click')"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: undefined,
    };
  },
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.bar {
  border: solid;
  border-color: $u-phoenix-primary;
  border-radius: 100px;
  border-width: 2px;
}
</style>