<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import { onMount } from "svelte";

  let games = [];

  async function fetchData() {
    try {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/games/records?expand=developer,developer.country,tags"
      );
      const data = await response.json();
      games = data.items;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    fetchData();
  });
</script>

<main>
  {#if games.length > 0}
  <div class="row">
    {#each games as game (game.id)}
    <div class="card col-3">
      <img src="{`http://127.0.0.1:8090/api/files/${game.collectionId}/${game.id}/${game.thumbnail}`}" class="card-img-top" alt="{game.title}">
      <div class="card-body">
        <h5 class="card-title">{game.title}</h5>
        <p class="card-text">{game.caption}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{game.release}</li>
        <li class="list-group-item">
          {#each game.expand.tags as tag (tag.id)}
          {tag.name}{#if game.expand.tags.length > 0},
          {/if}{/each}
        </li>
      </ul>
      <div class="card-body">
        <a href="{game.expand.developer.link}" class="card-link">{game.expand.developer.name}</a>
        <a href="{game.store}" class="card-link">Store</a>
      </div>
    </div>
    {/each}
  </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>