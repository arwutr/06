function mytFunction() {
  var j = document.getElementById("txtmyText").value;
  document.getElementById('ftxt').addEventListener('click', function () {
        liff.sendMessages([{
  "type": "flex",
  "altText": "บัตรสะสมแต้ม by armtrue",
  "contents": {
  "type": "bubble",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "image",
                "url": "https://news.siamphone.com/upload/news/nw26419/03.jpg",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "150:98",
                "gravity": "center"
              }
            ],
            "flex": 1
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Sticker LINE by armtrue",
                "size": "xs",
                "color": "#ffffff",
                "align": "center",
                "gravity": "center",
                "wrap": true
              }
            ],
            "backgroundColor": "#EC3D44",
            "paddingAll": "2px",
            "paddingStart": "4px",
            "paddingEnd": "4px",
            "flex": 0,
            "position": "absolute",
            "offsetStart": "18px",
            "offsetTop": "18px",
            "cornerRadius": "100px",
            "width": "148px",
            "height": "25px"
          }
        ]
      }
    ],
    "paddingAll": "0px"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "contents": [],
                "size": "xl",
                "wrap": true,
                "text": "LINE REWARD",
                "color": "#ffffff",
                "weight": "bold"
              },
              {
                "type": "text",
                "text": "บัตรสะสมแต้ม",
                "color": "#ffffffcc",
                "size": "sm"
              }
            ],
            "spacing": "sm"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "รับแต้ม",
                      "uri": ""+j
                    },
                    "style": "primary"
                  }
                ],
                "cornerRadius": "2px"
              }
            ],
            "paddingAll": "13px",
            "backgroundColor": "#ffffff1A",
            "cornerRadius": "2px",
            "margin": "xl",
            "borderWidth": "medium",
            "borderColor": "#ffffff"
          }
        ]
      },
      {
        "type": "separator",
        "margin": "md"
      },
      {
        "type": "text",
        "text": "ตรวจสอบแต้ม",
        "margin": "md",
        "wrap": true,
        "decoration": "underline",
        "style": "italic",
        "color": "#E8DEDE",
        "action": {
          "type": "uri",
          "label": "ตรวจสอบแต้ม",
          "uri": "line://ch/1432061434/wtz4404y?us=LINE&um=Owner&uca=Share"
        }
      }
    ],
    "paddingAll": "20px",
    "backgroundColor": "#464F69"
  }
}
}]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}

	

function my67Function() {
    var x = document.getElementById("ffmelody").value;
  document.getElementById('sffmelody').addEventListener('click', function () {
        liff.sendMessages([{
    "type": "flex",
    "altText": "melody by armtrue",
    "contents": {
  "type": "bubble",
  "header": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "image",
            "url": "https://melody-assets.line-scdn.net/musics/public/"+x+".jpg",
            "aspectMode": "fit",
            "gravity": "center",
            "flex": 1,
            "aspectRatio": "1:1",
            "size": "full"
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Melody",
            "color": "#ffffff",
            "align": "center",
            "wrap": true,
            "weight": "bold",
            "size": "xl"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "เสียงเรียกเข้า และ เสียงรอสาย",
                "color": "#568793",
                "wrap": true,
                "align": "center"
              },
              {
                "type": "text",
                "text": ""+x,
                "margin": "xl",
                "color": "#55DD54",
                "align": "center"
              }
            ]
          }
        ],
        "backgroundColor": "#564F69"
      }
    ],
    "paddingAll": "0px"
  },
  "size": "kilo",
  "action": {
    "type": "uri",
    "label": "action",
    "uri": "https://melody.line.me/melody/"+x
  }
}
  }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}


function my91Function() {
    var a = document.getElementById("a91").value;
    var b = document.getElementById("b91").value;
  document.getElementById('my91').addEventListener('click', function () {
        liff.sendMessages([{
    "type": "flex",
    "altText": "Rich Message",
    "contents": {
  "type": "bubble",
      "size": "giga",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "image",
        "url": ""+a,
        "size": "full",
        "aspectMode": "fit",
        "aspectRatio": "1:1",
        "gravity": "center"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "cr.armtrue",
            "color": ""
          }
        ],
        "position": "absolute",
        "offsetBottom": "0px",
        "offsetStart": "0px",
        "offsetEnd": "0px",
        "paddingAll": "20px"
      }
    ],
    "paddingAll": "0px"
  },
  "action": {
    "type": "uri",
    "label": "action",
    "uri": ""+b
  }
}
  }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}


function my55Function() {
    var ก = document.getElementById("urll").value;
    var ข = document.getElementById("itttext").value;
  document.getElementById('urlltxt5').addEventListener('click', function () {
        liff.sendMessages([{
    "type": "template",
    "altText": "Image info",
    "template": {
      "type": "image_carousel",
      "columns": [
        {
          "imageUrl": ""+ก,
          "action": {
            "type": "uri",
            "uri": ""+ข
          }
        }
      ]
    }
  }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}

function my56Function() {
    var a = document.getElementById("tpurll").value;
    var b = document.getElementById("tp1text").value;
    var x = document.getElementById("tpll").value;
    var y = document.getElementById("tpurllink").value;
  document.getElementById('tpurlltxt5').addEventListener('click', function () {
        liff.sendMessages([{
  "type": "template",
  "altText": "ผลิต template by armtrue",
  "template": {
    "type": "buttons",
    "actions": [
      {
        "type": "uri",
        "label": "คลิกดูรายละเอียด",
        "uri": ""+y
      }
    ],
    "thumbnailImageUrl": ""+a,
    "imageAspectRatio": "square",
      "imageSize": "contain",
"wrap": true,
    "title": ""+b,
    "text": ""+x
  }
}]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}
function orderFunction() {
    var o = document.getElementById("orderstic").value;
    var p = document.getElementById("coststk").value;
  document.getElementById('preorder').addEventListener('click', function () {
        liff.sendMessages([{
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
	"size": "kilo",
    "direction": "ltr",
    "hero": {
      "type": "image",
      "url": "https://dl.dropbox.com/s/me1wkk6g4cuc89g/20190811_154841.jpg",
      "size": "full",
      "aspectRatio": "1.91:1",
      "aspectMode": "fit"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "สั่งซื้อ",
              "align": "start",
              "gravity": "center",
              "color": "#B9A6A6"
            },
            {
              "type": "text",
              "text": " "+o,
              "size": "xxl",
              "align": "center",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "รายการ",
              "align": "end",
              "gravity": "center",
              "color": "#B9A6A6"
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "md",
          "contents": [
            {
              "type": "text",
              "text": "ราคา",
              "gravity": "center",
              "color": "#B9A6A6"
            },
            {
              "type": "text",
              "text": " "+p,
              "size": "xxl",
              "align": "center",
              "weight": "bold",
              "color": "#DD673D"
            },
            {
              "type": "text",
              "text": "บาท",
              "align": "end",
              "gravity": "center",
              "color": "#B9A6A6"
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "คลิกดูหมายเลขบัญชี",
            "uri": "line://app/1553266645-JdkVV53Y"
          },
          "style": "primary"
        }
      ]
    },
    "styles": {
      "hero": {
        "backgroundColor": "#000000"
      }
    }
  }
}]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function RemyFunction() {
var z = document.getElementById("smytext").value;
  location.replace("https://store.line.me/search/th?q="+z)
}



function recomm1Function() {
  document.getElementById('recomm').addEventListener('click', function () {
        liff.sendMessages([{
    "type": "flex",
    "altText": "sticker LINE by armtrue",
    "contents": {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "image",
                    "url": "https://dl.dropbox.com/s/me1wkk6g4cuc89g/20190811_154841.jpg",
                    "size": "full",
                    "aspectMode": "fit",
                    "aspectRatio": "1.91:1",
                    "gravity": "center",
                    "backgroundColor": "#000000"
                  }
                ],
                "flex": 1
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "ติดตาม",
                "align": "center",
                "gravity": "center",
                "color": "#ffffff"
              }
            ],
            "position": "absolute",
            "width": "68px",
            "height": "25px",
            "cornerRadius": "100px",
            "offsetTop": "18px",
            "offsetStart": "18px",
            "paddingAll": "2px",
            "paddingStart": "4px",
            "paddingEnd": "4px",
            "backgroundColor": "#6D94F6",
            "action": {
              "type": "uri",
              "label": "Facebook",
              "uri": "https://www.facebook.com/stickerlinebyarmtrue/"
            },
            "flex": 1
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "image",
                    "url": "https://dl.dropbox.com/s/ca5qr5rk8jl5m26/armtrue.jpg",
                    "aspectMode": "cover",
                    "size": "full"
                  }
                ],
                "cornerRadius": "100px",
                "width": "72px",
                "height": "72px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "contents": [
                      {
                        "type": "span",
                        "text": "Stickerlinebyarmtrue",
                        "weight": "bold",
                        "color": "#000000",
                        "style": "normal",
                        "decoration": "underline",
                        "size": "md"
                      },
                      {
                        "type": "span",
                        "text": "     "
                      },
                      {
                        "type": "span",
                        "text": "อัพเดทข่าวสารเกี่ยวกับสติกเกอร์ และเทคนิคต่างๆในการใช้ไลน์ พร้อมกับการจำหน่ายสินค้า/บริการของไลน์ เช่น Flex Message และอื่นๆ",
                        "color": "#ECEEF4",
                        "size": "xs"
                      }
                    ],
                    "size": "sm",
                    "wrap": true
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "icon",
                        "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                      },
                      {
                        "type": "text",
                        "text": "5.0",
                        "size": "sm",
                        "color": "#ECEEF4"
                      }
                    ],
                    "spacing": "sm",
                    "margin": "md"
                  }
                ]
              }
            ],
            "spacing": "xl",
            "paddingAll": "20px"
          }
        ],
        "paddingAll": "0px"
      },
      "styles": {
        "body": {
          "backgroundColor": "#6785CC"
        }
      }
    }
  }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
 document.getElementById('saleth').addEventListener('click', function () {
        liff.sendMessages([{
    "type": "flex",
    "altText": "Special Sticker",
    "contents": {
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://obs.line-scdn.net/0hxbiSY_NyJ01UKgynn79YGhBoICM4BDMFYRw8KHkvfX5lSjUcblBtLyF5ZS54HmMHOhhve3l4Knt-SmRMdAkxNxNPAQ8DbgN5ETIJRQhUBQl5EmNLa0thLDQrKS9xTjVIaw",
    "size": "full",
    "aspectRatio": "16:8",
    "aspectMode": "cover",
    "action": {
      "type": "uri",
      "uri": "http://linecorp.com/"
    }
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "ลดราคาเหลือ 6 บาท",
        "weight": "bold",
        "size": "xl",
        "wrap": true
      },
      {
        "type": "box",
        "layout": "baseline",
        "margin": "md",
        "contents": [
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "text",
            "text": "4 วันเท่านั้น",
            "size": "sm",
            "color": "#999999",
            "margin": "md",
            "flex": 0
          }
        ]
      }
    ],
    "backgroundColor": "#FFC0CB"
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "Click",
          "uri": "line://ch/1359301715/#editorspick/3234"
        },
        "color": "#CD919E"
      },
      {
        "type": "spacer",
        "size": "sm"
      }
    ],
    "flex": 0
  },
  "styles": {
    "footer": {
      "backgroundColor": "#FFC0CB"
    }
  }
}
  }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}

function randstk1Function() {
 liff.getProfile().then(profile => {
		const userDisplayName = profile.displayName
        liff.sendMessages([{
  "type": "template",
  "altText": userDisplayName+"เล่นสุ่มสติกเกอร์กันไหม",
  "template": {
    "type": "confirm",
    "actions": [
      {
        "type": "uri",
        "label": "เล่น",
        "uri": "line://app/1553266645-KJ5VVlE1"
      },
      {
        "type": "uri",
        "label": "ไม่เล่น",
        "uri": "https://pbs.twimg.com/profile_images/655613050838364160/71th_J2e_400x400.jpg"
      }
    ],
    "text": userDisplayName + "เล่น Big Sticker แบบสุ่มกันไหม"
  }
}]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 
}
 



    
