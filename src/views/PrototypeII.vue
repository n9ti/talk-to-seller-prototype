<template>
  <div class="min-h-screen">
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
              @click="
                sendMessages(
                  'https://shopee.co.th/Ready-Stock-NEW-BALANCE-M997NM-MADE-IN-USA1849378307-i.162968657.2495003037'
                )
              "
              class="mx-2 w-full bg-green-400 text-xl text-white py-2 px-4 hover:bg-green-500 rounded"
            >
              Talk to seller
            </button>
            <button
              class="mx-2 w-full bg-green-400 text-xl text-white py-2 px-4 hover:bg-green-500 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    window.liff.init();
    document.title = "Prototype B";
  },
  methods: {
    async sendMessages(msg) {
      window.liff.openWindow({
        url: `line://oaMessage/@434xepgn/?${msg}`,
        external: true
      });
    }
  }
};
</script>
