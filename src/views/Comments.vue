<template>
  <div class="comments">
    <h1 class="mb-4">
      Комментарии
    </h1>
    <div
      v-for="item in state.comments"
      :key="item.text"
      class="card"
    >
      <span class="mr-2">{{ item.score }}</span>
      <p class="mb-4">
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'

const state = reactive({
  comments: [
        {text:"Having spent a little time on the sea, it&#x27;s remarkable how much weather impedes any operations, and naturally accidents often happen at night in bad weather.These huge ferries just had to wait there and about a hundred people died right outside in the sea.Just running a regular rubber boat in normally windy weather on the Baltic is next to useless as the propeller spends a large portion of time out of the water and you can&#x27;t get anywhere. Coast guards and specialized rescuers have better high speed RIB boats. And in the Baltic it&#x27;s probably nothing compared to North Sea weather.If one could develop a large enough quad- or hexacopters that could be stored on all ferries and deployed to pick up people and lower them to ferry decks, that would help a lot. Hypothermia kills people so quickly there&#x27;s often not enough time to send specialized help craft from far away.",score:'null'},
        {text:"Here is the relevant Wikipedia article: https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;MS_Estonia",score:'null'},
        {
          text:"http:&#x2F;&#x2F;news.bbc.co.uk&#x2F;onthisday&#x2F;hi&#x2F;dates&#x2F;stories&#x2F;september&#x2F;2...",
          score:'null'
        },
        {text:"William Langwiesche wrote a really good article on the view of passengers from inside the sinking vessel. It&#x27;s well worth a read.http:&#x2F;&#x2F;www.theatlantic.com&#x2F;magazine&#x2F;archive&#x2F;2004&#x2F;05&#x2F;a-sea-st...It would be nice if someone could please not stick a fatuous &quot;TLDR&quot; here.",score:'null'},
        {text:"Reading these disaster transcripts always haunts me. But it&#x27;s also nice to see strangers rally to help each other. There is no discussion of cost, delay, or hardship.It seems very weird to me that ultimately, according to Wikipedia, they buried he ship with pebbles. Why was this done, I thought most sunken ships were left alone.",score:'null'}]
})
</script>

<style scoped>

</style>