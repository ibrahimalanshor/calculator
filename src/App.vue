<template>
  <div id="app">
    <div class="bg">
      <div class="calculator">
        <form class="result" @submit.prevent="count">
          <span>{{ result || placeholder }}</span>
          <input type="text" :placeholder="placeholder" v-model="number" ref="number" autofocus>
        </form>
        <div class="buttons">
          <div class="left">
            <button class="button top" v-for="(button, index) in buttons.top" :key="`top-${index}`" @click="button.method(button.text)">{{ button.text }}</button>
            <button class="button" v-for="(button, index) in buttons.number" :class="{ 'bottom-left': button.corner }" :key="`left-${index}`" @click="add(button.text)">{{ button.text }}</button>
          </div>
          <div class="right">
            <button class="button right" v-for="(button, index) in buttons.right" :class="{ 'bottom-right': button.corner }" :key="`bottom-${index}`" @click="button.method(button.text)">{{ button.text }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        number: '',
        result: 0,
        placeholder: new Date().getFullYear(),
        buttons: {
          top: [
            {
              text: 'C',
              method: this.clear
            },
            {
              text: '%',
              method: this.add
            },
            {
              text: 'del',
              method: this.del
            }
          ],
          number: [
            {
              text: '7',
            },
            {
              text: '8',
            },
            {
              text: '9',
            },
            {
              text: '4',
            },
            {
              text: '5',
            },
            {
              text: '6',
            },
            {
              text: '1',
            },
            {
              text: '2',
            },
            {
              text: '3',
            },
            {
              text: '0',
              corner: true,
            },
            {
              text: '00',
              corner: true,
            },
            {
              text: '.',
            },
          ],
          right: [
            {
              text: '/',
              method: this.add
            },
            {
              text: '*',
              method: this.add 
            },
            {
              text: '-',
              method: this.add
            },
            {
              text: '+',
              method: this.add 
            },
            {
              text: '=',
              corner: true,
              method: this.count 
            }
          ]
        }
      }
    },
    watch: {
      number(newVal, oldVal) {
        this.number = this.number.replace(/[^*+-/%\d.]/g, '')

        if (/^[*+-/%]|[*+-/%]{2}/.test(newVal)) {
          this.number = oldVal
        }

        if (!/[*+-/%]$/.test(this.number)) {
          this.result = Function(`return ${this.number}`)()
        }

        this.$refs.number.focus()
      }
    },
    methods: {
      clear() {
        this.result = 0
        this.number = ''
      },
      del() {
        this.number = this.number.slice(0, -1)
      },
      add(num) {
        this.number += num
      },
      modulus() {
        this.add('%')
      },
      count() {
        if (/[*+-/%]\d/g.test(this.number)) {
          this.number = this.result.toString()
          this.result = 0
        }
      }
    }
  }
</script>