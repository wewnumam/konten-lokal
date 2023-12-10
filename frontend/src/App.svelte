<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.js";
  import { onMount } from "svelte";
  import Masonry from "masonry-layout";

  let masonry;

  // Callback to initialize Masonry after images are loaded
  function initMasonry(container) {
    masonry = new Masonry(container, {
      percentPosition: true,
      itemSelector: '.col-item'
      // Other Masonry options can be added here
    });
    masonry.layout();
  }

  let items = [];
  let row;

  async function fetchData() {
    try {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/items/records?expand=author,author.country,tags"
      );
      const data = await response.json();
      items = data.items;
      initMasonry(row);
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
      <div class="row" bind:this={row} use:initMasonry>
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#868e96"
              /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text
              ></svg
            >
            <div class="card-body">
              <h5 class="card-title">Card title that wraps to a new line</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card p-3">
            <figure class="p-3 mb-0">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0 text-body-secondary">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#868e96"
              /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text
              ></svg
            >
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card text-bg-primary text-center p-3">
            <figure class="mb-0">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0 text-white">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        {#if items.length > 0}
          {#each items as item (item.id)}
            <div class="col-sm-6 col-lg-4 mb-4 col-item">
              <div class="card text-center">
                <img
                  class="bd-placeholder-img card-img-top img-fluid"
                  src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.thumbnail}`}
                  alt={item.title}
                />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">
                    {item.caption}
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary"
                      >Last updated 3 mins ago</small
                    >
                  </p>
                </div>
              </div>
            </div>
          {/each}
        {:else}
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card text-center">
            <div class="card-body">
              <p class="card-text">
                Loading...
              </p>
            </div>
          </div>
        </div>
        {/if}
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card">
            <svg
              class="bd-placeholder-img card-img"
              width="100%"
              height="260"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Card image"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#868e96"
              /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text
              ></svg
            >
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card p-3 text-end">
            <figure class="mb-0">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0 text-body-secondary">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 col-item">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is another card with title and supporting text below. This
                card has some additional content to make it slightly taller
                overall.
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
