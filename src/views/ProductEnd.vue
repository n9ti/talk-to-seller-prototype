<template>
  <div class="min-h-screen">
    <iframe v-if="showIframe" src="line://ti/p/@434xepgn"></iframe>
    <section class="">
      <div class="container mx-auto">
        <div class="px-6 py-4">
          <img src="../assets/products/newb.jpg" alt="" />
          <div class="mt-4 flex flex-col ml-4">
            <p class="break-words font-bold text-gray-800">
              NEW BALANCE M997NM MADE IN USA
            </p>
            <span class="text-gray-600">3,200.-</span>
          </div>

          <div class="mt-4 flex items-center">
            <button
              @click="openModel()"
              class="mx-2 w-full bg-green-400 text-xl text-white py-2 px-4 hover:bg-green-500 rounded"
            >
              Talk to seller
            </button>
            <button
              @click="tryOpen"
              class="mx-2 w-full bg-green-400 text-xl text-white py-2 px-4 hover:bg-green-500 rounded"
            >
              Buy Nowx
            </button>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <div v-show="show">
      <div
        @click="show = false"
        class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
      ></div>
      <div class="fixed left-0 right-0 bottom-0">
        <div class="m-2 border bg-white">
          <div class="flex items-center border-b p-3">
            <img
              src="../assets/products/adidas.jpg"
              class="h-12 w-12 bg-gray-500"
            />
            <div class="flex flex-col ml-4">
              <p class="break-words font-bold text-gray-800">
                NEW BALANCE M997NM MADE IN USA
              </p>
              <span class="text-gray-600">3,200.-</span>
            </div>
          </div>
          <!-- <div class="flex items-center m-2">
            <div class="flex-auto text-center border-r">ยื่นข้อเสนอ</div>
            <div class="flex-auto text-center">ซื้อตอนนี้</div>
            </div> -->
          <div class="flex w-full bg-gray-200 p-3">
            <input
              v-model="msg"
              type="text"
              class="flex-auto rounded py-2 px-3 mr-3"
              placeholder="Aa"
              ref="textInput"
            />
            <button
              @click="sendMessages()"
              class="rounded inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                ></path>
              </svg>
            </button>
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
      show: false,
      msg: "",
      isBlur: false,
      showIframe: false
    };
  },
  mounted() {
    window.liff.init();
    document.title = "Product End";
  },
  methods: {
    handleEvent() {
      this.isBlur = true;
      console.log("it blur");
    },
    async tryOpen() {
      console.log("click");
      // let url = "line://ti/p/@434xepgn";
      let url2 = "https://line.me/R/ti/p/@434xepgn";
      window.addEventListener("blur", this.handleEvent);
      // window.location = url;
      this.showIframe = true;
      setTimeout(() => {
        if (!this.isBlur) {
          window.location = url2;
        }
        window.removeEventListener("blur", this.handleEvent);
        console.log("timeout it blur");
      }, 100);
    },
    openModel() {
      this.show = true;
      this.$nextTick(() => this.$refs.textInput.focus());
    },
    async sendMessages() {
      let url =
        "https://shopee.co.th/Ready-Stock-NEW-BALANCE-M997NM-MADE-IN-USA1849378307-i.162968657.2495003037";
      try {
        await window.liff.sendMessages([
          {
            type: "text",
            text: `${this.msg} \r\n→ ${url}`
          }
        ]);
        this.$toast.top("Messages sent");
      } catch (e) {
        window.location = `line://oaMessage/@434xepgn/?${this.msg} \r\n→ ${url}`;
      } finally {
        this.show = false;
      }
    }
  }
};
</script>

<style scoped>
iframe {
  width: 1px;
  height: 1px;
}
</style>