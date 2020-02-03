<script>
  let visible = false;
</script>

<video class:visible autoplay loop on:loadeddata="{e => visible = true}">
  <source src="ri.mp4" type="video/mp4" tabindex="-1">  
</video>

<style>
video {
  position: fixed;
  top: 50%;
  left: 50%;
  opacity: 0;
  clip-path: circle(0 at 50% 50%);
  transform: translate(-50%, -50%);
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
  z-index: -1;
}

video.visible {
  transition: opacity 0.1s, clip-path 0.7s 0.2s;
  clip-path: circle(71vmax at 50% 50%);
  opacity: 1;
}
</style>