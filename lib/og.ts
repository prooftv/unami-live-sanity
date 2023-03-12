import { Speaker } from './types';

// https://cards.microlink.io/editor?p=2ga8PD4KICAgIDxMaW5rCiAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA3MDAmZGlzcGxheT1zd2FwJwogICAgICByZWw9J3N0eWxlc2hlZXQnCiAgICAvPgogIDxCb3gKICAgIGFzPSdoZWFkZXInCiAgICBzeD17ewogICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywKICAgICAgcHQ6ICcxNHB4JywKICAgICAgcHI6ICcyNHB4JywKICAgICAgcmlnaHQ6IDAsCiAgICB9fQogID4KICAgIDxJbWFnZQogICAgICAgIHN4PXt7IHdpZHRoOiAxNDQsIGhlaWdodDogNTQgfX0KICAgICAgICBzcmM9Imh0dHBzOi8vd3d3LmRhdG9jbXMtYXNzZXRzLmNvbS8zNTI1NS8xNjAzNjc4MzY4LWxvZ28uc3ZnIgogICAgICAvPgogIDwvQm94PgogIDxCb3gKICAgIGFzPSdoZWFkZXInCiAgICBzeD17ewogICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywKICAgICAgbXQ6ICctNTBweCcsCiAgICAgIG1sOiAnLTI1MHB4JywKICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJywKICAgICAgd2lkdGg6ICc1NzBweCcsCiAgICAgIGhlaWdodDogJzU3MHB4JywKICAgICAgYmFja2dyb3VuZENsaXA6ICdjb250ZW50LWJveCwgYm9yZGVyLWJveCcsCiAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudChibGFjaywgYmxhY2spLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYzYxOTIsICNlYzRjMzQsICNmZmJkMmIsICNlYmRlNTYsICM1N2M3NTQsICM1M2ExZWIpJywKICAgICAgcGFkZGluZzogJzVweCcsCiAgICAgIG91dGxpbmU6ICdub25lJywKICAgICAgekluZGV4OiAnMScKICAgIH19CiAgLz4KICA8RmxleAogICAgc3g9e3sKICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsCiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLAogICAgICBiZzogJ2JsYWNrJywKICAgIH19CiAgPgogICAgPEltYWdlCiAgICAgIHN4PXt7IHdpZHRoOiAxOTIsIGhlaWdodDogMTkyLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBtcjogJzExMnB4JywgbWw6IDUsIHpJbmRleDogJzEnIH19CiAgICAgIHNyYz17cXVlcnkubG9nb30KICAgIC8-CiAgPEZsZXgKICAgIHN4PXt7CiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywKICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLAogICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywKICAgICAgYmc6ICdibGFjaycKICAgIH19CiAgPgogICAgPFRleHQKICAgICAgc3g9e3sKICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTNweCcsCiAgICAgICAgZm9udEZhbWlseTogJ0ludGVyJywKICAgICAgICBmb250U2l6ZTogNiwKICAgICAgICBmb250V2VpZ2h0OiA3MDAsCiAgICAgICAgY29sb3I6ICd3aGl0ZScsCiAgICAgICAgbWF4V2lkdGg6ICczOHJlbScsCiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJywKICAgICAgICBsaW5lSGVpZ2h0OiAnMTAwJScKICAgICAgfX0KICAgICAgY2hpbGRyZW49e3F1ZXJ5LmF1dGhvcn0KICAgIC8-CiAgICA8VGV4dAogICAgICBhcz0nc3BhbicKICAgICAgc3g9e3sKICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLS4wM20nLAogICAgICAgIGZvbnRGYW1pbHk6ICdJbnRlcicsCiAgICAgICAgY29sb3I6ICcjZDhkOGQ4JywKICAgICAgICBmb250U2l6ZTogMywKICAgICAgICBmb250V2VpZ2h0OiAzMDAsCiAgICAgIH19CiAgICA-CiAgICAgIHtxdWVyeS50aXRsZX0KICAgIDwvVGV4dD4KICA8L0ZsZXg-CiAgPC9GbGV4Pgo8Lz4&author=Bel%C3%A9n%20Curcio&title=Solution%20Architect%20%40%20Vercel&logo=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1601389074-okbel.png%3Fcrop%3Dfocalpoint%26fit%3Dcrop%26fm%3Djpg%26fp-x%3D0.5%26fp-y%3D0.5%26h%3D192%26w%3D192
export const createSpeakerCard = (speaker: Speaker) => {
  const api = 'https://i.microlink.io/';
  const cardUrl =
    'https://cards.microlink.io/?p=2ga8PD4KICAgIDxMaW5rCiAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA3MDAmZGlzcGxheT1zd2FwJwogICAgICByZWw9J3N0eWxlc2hlZXQnCiAgICAvPgogIDxCb3gKICAgIGFzPSdoZWFkZXInCiAgICBzeD17ewogICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywKICAgICAgcHQ6ICcxNHB4JywKICAgICAgcHI6ICcyNHB4JywKICAgICAgcmlnaHQ6IDAsCiAgICB9fQogID4KICAgIDxJbWFnZQogICAgICAgIHN4PXt7IHdpZHRoOiAxNDQsIGhlaWdodDogNTQgfX0KICAgICAgICBzcmM9Imh0dHBzOi8vd3d3LmRhdG9jbXMtYXNzZXRzLmNvbS8zNTI1NS8xNjAzNjc4MzY4LWxvZ28uc3ZnIgogICAgICAvPgogIDwvQm94PgogIDxCb3gKICAgIGFzPSdoZWFkZXInCiAgICBzeD17ewogICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywKICAgICAgbXQ6ICctNTBweCcsCiAgICAgIG1sOiAnLTI1MHB4JywKICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJywKICAgICAgd2lkdGg6ICc1NzBweCcsCiAgICAgIGhlaWdodDogJzU3MHB4JywKICAgICAgYmFja2dyb3VuZENsaXA6ICdjb250ZW50LWJveCwgYm9yZGVyLWJveCcsCiAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudChibGFjaywgYmxhY2spLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYzYxOTIsICNlYzRjMzQsICNmZmJkMmIsICNlYmRlNTYsICM1N2M3NTQsICM1M2ExZWIpJywKICAgICAgcGFkZGluZzogJzVweCcsCiAgICAgIG91dGxpbmU6ICdub25lJywKICAgICAgekluZGV4OiAnMScKICAgIH19CiAgLz4KICA8RmxleAogICAgc3g9e3sKICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsCiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLAogICAgICBiZzogJ2JsYWNrJywKICAgIH19CiAgPgogICAgPEltYWdlCiAgICAgIHN4PXt7IHdpZHRoOiAxOTIsIGhlaWdodDogMTkyLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBtcjogJzExMnB4JywgbWw6IDUsIHpJbmRleDogJzEnIH19CiAgICAgIHNyYz17cXVlcnkubG9nb30KICAgIC8-CiAgPEZsZXgKICAgIHN4PXt7CiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywKICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLAogICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywKICAgICAgYmc6ICdibGFjaycKICAgIH19CiAgPgogICAgPFRleHQKICAgICAgc3g9e3sKICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTNweCcsCiAgICAgICAgZm9udEZhbWlseTogJ0ludGVyJywKICAgICAgICBmb250U2l6ZTogNiwKICAgICAgICBmb250V2VpZ2h0OiA3MDAsCiAgICAgICAgY29sb3I6ICd3aGl0ZScsCiAgICAgICAgbWF4V2lkdGg6ICczOHJlbScsCiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJywKICAgICAgICBsaW5lSGVpZ2h0OiAnMTAwJScKICAgICAgfX0KICAgICAgY2hpbGRyZW49e3F1ZXJ5LmF1dGhvcn0KICAgIC8-CiAgICA8VGV4dAogICAgICBhcz0nc3BhbicKICAgICAgc3g9e3sKICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLS4wM20nLAogICAgICAgIGZvbnRGYW1pbHk6ICdJbnRlcicsCiAgICAgICAgY29sb3I6ICcjZDhkOGQ4JywKICAgICAgICBmb250U2l6ZTogMywKICAgICAgICBmb250V2VpZ2h0OiAzMDAsCiAgICAgIH19CiAgICA-CiAgICAgIHtxdWVyeS50aXRsZX0KICAgIDwvVGV4dD4KICA8L0ZsZXg-CiAgPC9GbGV4Pgo8Lz4';
  const title = `${speaker.title} @ ${speaker.company}`;
  const params = `&author=${speaker.name}&title=${title}&logo=${encodeURIComponent(
    speaker.imageSquare.url
  )}`;

  return `${api}${encodeURIComponent(cardUrl + params)}`;
};