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
                  'สวัสดี4 \r\n https://shop.line.me/@434xepgn/product/318692170 \r\n Hello'
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
          <a href="line://oaMessage/@mistoreonline/?this_is_a_book@505hylbr/666"
            >line://oaMessage/@434xepgn/?this_is_a_book@434xepgn/666</a
          >
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
      try {
        // window.liff.openWindow({
        //   url: `line://oaMessage/@434xepgn/?${encodeURIComponent(msg)}`,
        //   external: true
        // });
        window.open(
          `line://oaMessage/@434xepgn/?${encodeURIComponent(msg)}`,
          "_blank"
        );
      } catch (e) {
        // window.location = `line://oaMessage/@434xepgn/?${msg}`;
        window.open(
          `line://oaMessage/@434xepgn/?${encodeURIComponent(msg)}`,
          "_blank"
        );
      }
    }
  }
};
</script>
