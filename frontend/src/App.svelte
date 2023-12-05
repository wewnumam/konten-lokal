<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import { onMount } from "svelte";

  let items = [];

  async function fetchData() {
    try {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/items/records?expand=author,author.country,tags"
      );
      const data = await response.json();
      items = data.items;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    fetchData();
  });
</script>

<main>
  {#if items.length > 0}
  <div class="row">
    {#each items as item (item.id)}
    <div class="card col-3">
      <img src="{`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.thumbnail}`}" class="card-img-top" alt="{item.title}">
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.caption}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{item.release}</li>
        <li class="list-group-item">
          {#each item.expand.tags as tag (tag.id)}
          {tag.name}{#if item.expand.tags.length > 0},
          {/if}{/each}
        </li>
      </ul>
      <div class="card-body">
        <a href="{item.expand.author.link}" class="card-link">{item.expand.author.name}</a>
        <a href="{item.link}" class="card-link">Store</a>
      </div>
    </div>
    {/each}
  </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>