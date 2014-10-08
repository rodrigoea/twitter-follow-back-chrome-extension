/* EVENTS */

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {code:"$('.not-following').each(function(){$(this).find('.js-follow-btn').click();});"});
});


