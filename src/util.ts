import got from 'got';

export function consoleLog(...args: Parameters<typeof console.log>): void {
  console.log(...args); // eslint-disable-line no-console
}

export function consoleError(...args: Parameters<typeof console.error>): void {
  console.error(...args); // eslint-disable-line no-console
}

export function track(
  category: string,
  action: string,
  label: string,
  value?: number,
): void {
  const data = {
    // API Version.
    v: '1',
    // Tracking ID / Property ID.
    tid: 'UA-101920219-2',
    // Anonymous Client Identifier. Ideally, this should be a UUID that
    // is associated with particular user, device, or browser instance.
    cid: '555',
    // Event hit type.
    t: 'event',
    // Event category.
    ec: category,
    // Event action.
    ea: action,
    // Event label.
    el: label,
    // Event value.
    ev: value,
  };
  // Make best effort to track
  (async () => {
    try {
      await got.post('http://www.google-analytics.com/collect', { json: data });
    } catch (exception) {
      consoleError(exception);
    }
  })();
}
