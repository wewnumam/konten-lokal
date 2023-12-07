<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.js";
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
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Album example</h1>
        <p class="lead text-body-secondary">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <a href="/" class="btn btn-primary my-2">Main call to action</a>
          <a href="/" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      {#if items.length > 0}
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {#each items as item (item.id)}
        <div class="col">
          <div class="card shadow-sm">
            <img
              class="bd-placeholder-img card-img-top img-fluid"
              src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.thumbnail}`}
              alt={item.title}
              />
            <div class="card-body">
              <p class="card-text">
                {item.caption}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button
                  >
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button
                  >
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        {/each}
      </div>
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
  </div>

  {#if items.length > 0}
    <div class="row">
      {#each items as item (item.id)}
        <div class="card col-3">
          <img
            src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.thumbnail}`}
            class="card-img-top"
            alt={item.title}
          />
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
            <a href={item.expand.author.link} class="card-link"
              >{item.expand.author.name}</a
            >
            <a href={item.link} class="card-link">Store</a>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<footer class="text-body-secondary py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="/">Back to top</a>
    </p>
    <p class="mb-1">
      Album example is &copy; Bootstrap, but please download and customize it
      for yourself!
    </p>
    <p class="mb-0">
      New to Bootstrap? <a href="/">Visit the homepage</a> or read our
      <a href="../getting-started/introduction/">getting started guide</a>.
    </p>
  </div>
</footer>
