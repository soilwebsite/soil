/* eslint-disable */
export default function(productId) {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({domain: 'virginsoil.myshopify.com', apiKey: '45ea54cfba808104dd0550457a20f159', appId: '6'});

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent('product', {
        id: [productId],
        node: document.getElementById('product-component-1506116392081'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "layout": "horizontal",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "description": true,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "text-align": "left",
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "title": {
                "font-size": "26px"
              },
              "price": {
                "font-size": "18px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
}
