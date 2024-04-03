<script setup>
const { list, list2, addTo } = useTodo();
const todo = ref("");
const add = () => {
  addTo({ id: list2.value.length, text: todo.value });
  todo.value = null;
};
</script>

<template>
  <div class="m-8">
    <div class="flex justify-between">
      <UInput
        v-model="todo"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
        class="ml-4"
        color="white"
        :trailing="false"
        placeholder="AddToDo..."
      />
      <UButton @click="add()">Add</UButton>
    </div>
    <h1>List ToDo</h1>
    <ol>
      <li v-for="item in list2" :key="item.id">{{ item.text }}</li>
    </ol>
    <!-- <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore,
      accusamus quae atque, qui dicta fugit asperiores, iusto fugiat voluptatum
      quisquam tenetur minus nostrum! Earum harum doloribus laboriosam,
      voluptatem explicabo asperiores laudantium saepe accusantium blanditiis
      pariatur facere delectus esse odio quis aliquid quisquam, perferendis rem
      totam sint libero rerum eveniet at similique quibusdam. Quae dolores, iure
      incidunt earum, facilis laudantium placeat illo, natus repellendus
      similique ea. Sed, voluptate eligendi. Itaque, ad quae vitae consequuntur
      optio sit. Adipisci laborum voluptates pariatur, magnam earum libero
      ducimus, amet dolor nostrum deserunt magni nam soluta nulla ipsam beatae
      natus dolores non assumenda expedita, maxime sit sed blanditiis harum
      quibusdam? Corporis, eos? Sapiente dolorem ab voluptate totam minima
      maiores, ullam molestias vel, ipsa quidem harum? Incidunt rem quas
      recusandae. Consequatur aliquam sunt officiis recusandae excepturi,
      perferendis incidunt rerum optio quis blanditiis id voluptate delectus
      culpa molestias, saepe pariatur at qui ipsa, suscipit atque omnis.
      Deleniti, voluptates reprehenderit ab doloribus accusamus sit, explicabo
      magnam voluptatibus odit illum, aspernatur qui sunt provident architecto
      distinctio. Eos placeat quis necessitatibus eum magnam dolores vel ex
      quia! Cupiditate, autem eligendi vel necessitatibus nam deserunt quo nisi,
      nulla blanditiis corporis, eum id perspiciatis illo libero deleniti
      pariatur voluptate quas provident cum recusandae at explicabo! Quia
      aperiam laudantium maiores, architecto facilis, quisquam hic ipsam
      similique deserunt mollitia, animi sapiente eligendi eaque qui itaque eos
      enim cum! Suscipit illo unde illum voluptatum et qui eos, cum delectus
      assumenda eveniet reprehenderit quo fuga velit est, explicabo aut quasi
      voluptatem ipsum fugit similique dolorum id non! Quae ipsum quam placeat
      modi ut. Deleniti ut libero reiciendis voluptate inventore eius, tempora,
      rerum totam optio, labore obcaecati. Ipsa sit deserunt vitae, reiciendis,
      voluptatibus ducimus non aut dolorem praesentium veniam provident
      asperiores ea rerum molestiae laudantium illum sequi dicta? Aliquam
      temporibus inventore nostrum facere incidunt in! Voluptate culpa nesciunt
      magnam rem exercitationem nisi, blanditiis, et laboriosam, iure suscipit
      eveniet. Amet dolorem iure distinctio temporibus repellendus ut eaque
      mollitia quasi doloremque quas laboriosam, beatae repudiandae deserunt
      atque id quae tempora ipsa magnam maxime dicta quidem voluptas. Corporis
      dolor pariatur libero sed ipsam cumque tenetur aut vero odit, ipsa
      suscipit atque labore sint ab. Illum autem sed numquam nihil aliquam
      voluptatum omnis temporibus veniam saepe deserunt, ut, voluptates
      corporis? Maiores illo aliquam asperiores. Quasi exercitationem sunt quod
      molestias est consectetur, beatae ipsa unde! Reiciendis dolores alias
      cupiditate itaque atque quae beatae impedit porro minima dignissimos.
      Accusamus quae ab porro repellat, laboriosam et nesciunt? Temporibus,
      sapiente odio laudantium illo minima illum suscipit ipsam inventore error,
      ad architecto quis aperiam. Vero neque optio sed ullam aperiam et debitis
      iste ipsa atque quisquam. Quibusdam, quasi quod incidunt exercitationem
      quis ullam. Labore perferendis hic tempore totam ut, tempora, debitis
      dicta laudantium nam repellat dignissimos distinctio molestiae architecto
      temporibus illum harum, veniam quia numquam. Repellat temporibus, vitae
      voluptate deserunt fuga obcaecati praesentium numquam quis excepturi
      accusantium deleniti nesciunt ab cum eum quia harum pariatur quos quae,
      sint dolores quidem perspiciatis? Consequatur, molestiae consectetur ipsum
      velit quasi esse deserunt, quibusdam laboriosam exercitationem, et eos!
      Laboriosam, harum?
    </p> -->
  </div>
</template>