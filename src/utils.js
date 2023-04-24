function tweenValue(startValue, endValue, durationMs, updateFn, onCompleteFn) {
  const startTime = performance.now();

  const animate = () => {
    const elapsedMs = performance.now() - startTime;
    const progress = Math.min(elapsedMs / durationMs, 1);

    const currentValue = startValue + (endValue - startValue) * progress;
    updateFn(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else if (onCompleteFn) {
      onCompleteFn();
    }
  };

  requestAnimationFrame(animate);
}

export { tweenValue };
