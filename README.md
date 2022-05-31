# responsive-iframe-video
Make youtube, vimeo, etc. responsive while preserving original aspect ratio

## usage
- for vimeo and youtube works automatically
- to make it work for other providers, add relevant line here :

```javascript
autorun(function () {
    videoIframe_MakeResponsive('youtube')
    videoIframe_MakeResponsive('vimeo')
    videoIframe_MakeResponsive('ANY_OTHER_PROVIDER')
})
```

- you can also make responsive videos that were added after page load. Just add the following after appending new content
```javascript
    videoIframe_MakeResponsive('youtube')
```
- you can specify default aspect ratio if the iframe doesn't have width and height attributes
```javascript
    videoIframe_MakeResponsive('youtube', '16/9')
```
