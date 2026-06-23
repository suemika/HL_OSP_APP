function FlowExpressComponent(id){
	window.fml = window.fml||{};
	var a = $;
	var globalDom = a("#"+id);
	globalDom.append(createHtml());
	var expEmptyStr = "__default__";
	fml.STATIC = {
		_st: (new Date).getTime(),
		_ct: (new Date).getTime(),
		zIndex: 8e3,
		Language: "zh",
		num: 0,
		IDBase: new Date - 0,
		CSRF: a('meta[name="csrf-token"]').attr("content"),
		site: window.location.protocol + "//" + window.location.hostname
	}
	fml.Utils = {
			isString: function (a) {
				return "string" == typeof a
			},
			isNumber: function (b) {
				return a.isNumeric(b)
			},
			isFunction: function (b) {
				return a.isFunction(b)
			},
			isDate: function (a) {
				return a instanceof Date
			},
			isArray: function (b) {
				return a.isArray(b)
			},
			isEmpty: function (a) {
				return "" === a || fml.Utils.isNull(a)
			},
			isBlank: function (a) {
				return fml.Utils.isNull(a) || "" === a.trim()
			},
			isNull: function (a) {
				return null == a
			},
			isObjectEmpty: function (a) {
				if (null == a)
					return !0;
				if (a.length > 0)
					return !1;
				if (0 === a.length)
					return !0;
				for (var b in a)
					if (hasOwnProperty.call(a, b))
						return !1;
				return isNaN(a)
			},
			isValueWidget: function (a) {
				return !!fml.ValueWidgets[a]
			},
			address2Str: function (a, b, c) {
				if (c && a) {
					b = "";
					var d = !0;
					/p/.test(c) && a.province && (b += a.province, a.province === a.city && (d = !1)),
					/c/.test(c) && a.city && d && (b += a.city),
					/d/.test(c) && a.district && (b += a.district),
					/a/.test(c) && a.detail && (b += a.detail)
				}
				return b
			},
			num2Str: function (a, b) {
				if (fml.Utils.isEmpty(a))
					return "";
				var c = a + "";
				if (fml.Utils.isEmpty(b))
					return c;
				var d = /\[Num0\]/;
				if (d.test(b))
					return b.replace(d, c);
				if (d = /\[Num1\]/, d.test(b))
					return b.replace(d, fml.Utils._num2CN(c, !1));
				if (d = /\[Num2\]/, d.test(b))
					return b.replace(d, fml.Utils._num2CN(c, !0));
				d = /[#0]+,?[#0]*\.?[#0]*%?/;
				var e = b.match(d);
				if (e && e.length > 0) {
					var f = e[0];
					return c = fml.Utils._numberFormat(a, f),
					b.replace(d, c)
				}
				return b
			},
			_numberFormat: function (a, b) {
				var c = "",
				d = a + "";
				if (/%$/.test(b)) {
					c = "%",
					a = 100 * a,
					b = b.replace("%", "");
					var e = d.indexOf(".");
					if (e > -1) {
						var f = d.length - 3 - e;
						f = f < 0 ? 0 : f > 8 ? 8 : f,
						a = parseFloat(a.toFixed(f))
					}
					d = a + ""
				}
				var g = b.split("."),
				h = g[0],
				i = g[1];
				if ("" !== i) {
					var j = i ? i.length : 0;
					d = parseFloat(a).toFixed(j);
					for (var k = d.split(""), l = j; l > 0 && "#" === i.charAt(l - 1); l--) {
						var m = k.pop();
						if ("0" !== m) {
							k.push(m);
							break
						}
					}
					var n = k.pop();
					"." === n && (n = ""),
					d = k.join("") + n
				}
				var o = d.split("."),
				p = o[0];
				if (/,/.test(h))
					o[0] = p.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
				else {
					var q = h.match(/[0]+[0#]*$/);
					q && q.length > 0 && (o[0] = fml.Utils.leftPad(p, q[0].length, "0"))
				}
				return o.join(".") + c
			},
			_num2CN: function (a, b) {
				var c = "〇一二三四五六七八九",
				d = "个十百千万亿";
				b && (c = "零壹贰叁肆伍陆柒捌玖", d = "个拾佰仟万亿");
				var e = Math.floor(Math.abs(a)),
				f = Math.abs(a).toString(),
				g = f.replace(/\..*$/, ""),
				h = f.split("."),
				i = c,
				j = d,
				k = "-.",
				l = i[0],
				m = new RegExp(i[0] + "*$"),
				n = new RegExp(i[0] + "+", "g"),
				o = "",
				p = "";
				if (o = a < 0 ? k[0] : "", h.length >= 2) {
					var q = h[1];
					if (q) {
						p = k[1];
						for (var r = 0; r < q.length; r++)
							p += i[+q[r]]
					}
				}
				if (1 == g.length)
					return o + i[e] + p;
				if (g.length <= 5) {
					for (var s = "", t = 0, e = g.length; e--; ) {
						var u = +g[t];
						s += this._num2CN(g[t], b) + (u && e ? j[e] : ""),
						t++
					}
					return s = s.replace(n, l),
					s = s.replace(m, ""),
					o + s + p
				}
				for (var v = g.length / 4 >> 0, w = g.length % 4, s = ""; 0 == w || !j[3 + v]; )
					w += 4, v--;
				if (+g.substr(0, w)) {
					s = this._num2CN(g.substr(0, w), b) + j[3 + v];
					var x = g.substr(w);
					"0" === x[0] && (s += i[0]),
					s += this._num2CN(x, b)
				} else
					s = this._num2CN(g.substr(0, w), b) + this._num2CN(g.substr(w), b);
				return s = s.replace(n, l),
				s = s.replace(m, ""),
				o + s + p
			},
			date2Str: function (a, b) {
				if (!a)
					return "";
				var c = b.length,
				d = "";
				if (c > 0) {
					for (var e = b.charAt(0), f = 0, g = e, h = 1; h < c; h++) {
						var i = b.charAt(h);
						e !== i ? (d += fml.Utils._compileDateFormat({
								char: e,
								str: g,
								len: h - f
							}, a), e = i, f = h, g = e) : g += i
					}
					d += fml.Utils._compileDateFormat({
						char: e,
						str: g,
						len: c - f
					}, a)
				}
				return d
			},
			_compileDateFormat: function (a, b) {
				var c = a.str,
				d = a.len,
				e = a.char;
				switch (e) {
				case "E":
					c = d > 2 ? Date._DN[b.getDay()] : d > 1 ? Date._SDN[b.getDay()] : b.getDay() + "";
					break;
				case "y":
					c = d <= 3 ? (b.getFullYear() + "").slice(2, 4) : b.getFullYear();
					break;
				case "M":
					c = d > 2 ? Date._MN[b.getMonth()] : d < 2 ? b.getMonth() + 1 : fml.Utils.leftPad(b.getMonth() + 1 + "", 2, "0");
					break;
				case "d":
					c = d > 1 ? fml.Utils.leftPad(b.getDate() + "", 2, "0") : b.getDate();
					break;
				case "h":
					var f = b.getHours() % 12;
					0 === f && (f = 12),
					c = d > 1 ? fml.Utils.leftPad(f + "", 2, "0") : f;
					break;
				case "H":
					c = d > 1 ? fml.Utils.leftPad(b.getHours() + "", 2, "0") : b.getHours();
					break;
				case "m":
					c = d > 1 ? fml.Utils.leftPad(b.getMinutes() + "", 2, "0") : b.getMinutes();
					break;
				case "s":
					c = d > 1 ? fml.Utils.leftPad(b.getSeconds() + "", 2, "0") : b.getSeconds();
					break;
				case "a":
					c = b.getHours() < 12 ? "am" : "pm";
					break;
				default:
					c = a.str
				}
				return c
			},
			pick: function (a, b) {
				var c = {};
				return fml.Utils.forEach(b, function (b, d) {
					d in a && (c[d] = a[d])
				}),
				c
			},
			applyFunc: function (a, b, c, d) {
				return fml.Utils.isFunction(b) ? b.apply(a, c ? c : []) : d
			},
			forEach: function (a, b) {
				if (Array.isArray(a) || a instanceof jQuery)
					for (var c = 0, d = a.length; c < d && b.apply(a[c], [c, a[c]]) !== !1; c++);
				else if (a && "object" == typeof a)
					for (var e in a)
						if (a.hasOwnProperty(e) && b.apply(a[e], [e, a[e]]) === !1)
							break
			},
			flatten: function (a, b, c) {
				if (c || (c = []), a)
					for (var d = 0, e = a.length; d < e; d++) {
						var f = a[d];
						Array.isArray(f) ? fml.Utils.flatten(f, b, c) : b && !b(f) || c.push(f)
					}
				return c
			},
			applyCss: function (a, b) {
				fml.Utils.isEmpty(b) || (fml.Utils.isString(b) ? a.addClass(b) : a.css(b))
			},
			getServerDate: function (a) {
				if (a && a.getResponseHeader) {
					var b = a.getResponseHeader("date");
					b && (fml.STATIC._st = new Date(b).getTime(), fml.STATIC._ct = (new Date).getTime())
				}
			},
			ajax: function (b, c, d, e) {
				return a.ajax({
					type: "POST",
					beforeSend: function (a) {
						a.setRequestHeader("X-CSRF-Token", fml.STATIC.CSRF);
					},
					url: b.url,
					async: b.async !== !1,
					data: JSON.stringify(b.data),
					contentType: "application/json;charset=UTF-8",
					timeout: b.timeout
				}).done(function (a, b, d) {
					fml.Utils.getServerDate(d),
					c && c(a, b),
					e && e(a, b)
				}).fail(function (a, b, c) {
					switch (a.status) {
					case 400:
						if (fml.Utils.applyFunc(this, d, [a, b], !1) === !1) {
							var f = a.responseJSON || {};
							f.msg ? fml.Msg.toast({
								type: "warning",
								msg: f.msg
							}) : fml.Msg.toast({
								type: "error",
								msg: "é”™è¯¯çš„è¯·æ±‚"
							})
						}
						break;
					case 401:
						fml.Msg.toast({
							type: "warning",
							msg: "ç”¨æˆ·æœªç™»å½•"
						});
						break;
					case 402:
						fml.Msg.toast({
							type: "warning",
							msg: "å½“å‰ä¼šè¯å·²è¿‡æœŸ"
						});
						break;
					case 403:
						fml.Msg.toast({
							type: "warning",
							msg: "æ²¡æœ‰æ•°æ®è¯·æ±‚æƒé™"
						});
						break;
					case 404:
						fml.Msg.toast({
							type: "warning",
							msg: "æ‰¾ä¸åˆ°æ•°æ®èµ„æº"
						});
						break;
					case 0:
						break;
					default:
						fml.Msg.toast({
							type: "warning",
							msg: "ä¸ŽæœåŠ¡å™¨é€šä¿¡å¤±è´¥"
						}),
						console && console.log("é€šä¿¡å¤±è´¥")
					}
					e && e(a, b)
				})
			},
			ajaxUpload: function (b, c, d, e) {
				a.ajax({
					type: "POST",
					url: b.url,
					data: b.data,
					cache: !1,
					contentType: !1,
					processData: !1,
					beforeSend: function (a) {
						a.setRequestHeader("X-CSRF-Token", fml.STATIC.CSRF)
					},
					xhr: function () {
						var c = a.ajaxSettings.xhr();
						return c.upload && b.onUpload && c.upload.addEventListener("progress", function (a) {
							a.lengthComputable ? b.onUpload(a.loaded, a.total) : b.onUpload(3, 10)
						}, !1),
						c
					}
				}).done(function () {
					c && c.apply(this, arguments),
					e && e.apply(this, arguments)
				}).fail(function () {
					d && d.apply(this, arguments),
					e && e.apply(this, arguments)
				})
			},
			dataAjax: function (a, b, c, d) {
				a.data = a.data || {};
				var e = a.data;
				return fml.Utils.isEmpty(fml.STATIC.APPID) || (e.appId = fml.STATIC.APPID),
				fml.Utils.isEmpty(fml.STATIC.ENTRYID) || (e.entryId = fml.STATIC.ENTRYID),
				fml.Utils.isEmpty(fml.STATIC.DATAID) || (e.dataId = fml.STATIC.DATAID),
				fml.STATIC.BACKUP && (e.isBackup = !0),
				fml.Utils.isEmpty(fml.STATIC.FTOKEN) ? fml.Utils.isEmpty(fml.STATIC.QTOKEN) ? fml.Utils.isEmpty(fml.STATIC.RTOKEN) ? fml.Utils.isEmpty(fml.STATIC.ATOKEN) || (e.fx_access_token = fml.STATIC.ATOKEN, e.fx_access_type = "app_public") : (e.fx_access_token = fml.STATIC.RTOKEN, e.fx_access_type = "report_public") : (e.fx_access_token = fml.STATIC.QTOKEN, e.fx_access_type = "form_query") : (e.fx_access_token = fml.STATIC.FTOKEN, e.fx_access_type = "form_public"),
				fml.Utils.ajax(a, function (a, c) {
					b(a, c)
				}, c, d)
			},
			getUrlParameter: function (a) {
				for (var b = window.location.search.substring(1), c = b.split("&"), d = 0; d < c.length; d++) {
					var e = c[d].split("=");
					if (e[0] == a)
						return e[1]
				}
				return null
			},
			validateEmail: function (a) {
				return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a)
			},
			redirectTo: function (a) {
				window.location.href = a
			},
			isCanvasSupported: function () {
				var a = document.createElement("canvas");
				return !(!a.getContext || !a.getContext("2d"))
			},
			isFormDataSupported: function () {
				return void 0 !== window.FormData
			},
			getFileDownloadURL: function (a, b, c) {
				switch (a.bucket) {
				case fml.CONST.QN_BUCKET.PUBLIC_IMAGE:
					var d = "",
					e = a.thumb;
					return e && (d = "?imageView2/" + e.mode + "/w/" + e.width + "/h/" + e.height),
					b(fml.CONFIG.HOST.IMAGE_HOST + "/" + a.qnKey + d);
				case fml.CONST.OSS_BUCKET.PUBLIC_IMAGE:
					return b(fml.CONFIG.HOST.OSS_IMAGE_HOST + "/" + a.ossKey);
				case fml.CONST.QN_BUCKET.PRIVATE_FILE:
				default:
					if (!fml.STATIC.APPID)
						return c();
					fml.Utils.dataAjax({
						url: "/dashboard/app/" + fml.STATIC.APPID + "/file_url",
						data: a
					}, function (a) {
						b(a.url)
					}, function (a) {
						fml.Utils.applyFunc(this, c, [a], !1) === !1 && fml.Msg.toast({
							type: "warning",
							msg: "æ–‡ä»¶èŽ·å–å¤±è´¥"
						})
					})
				}
			},
			evalFormula: function (a) {
				var b = [];
				fml.Utils.forEach(Object.keys(fml.Formula), function (a, c) {
					b.push("var " + c + "=fml.Formula." + c)
				});
				var it = b.join(";") + ";";
				var c = new Function(it + "return " + a)();
				return c
			},
			createEntryAttributeField: function (b, c) {
				var d = {
					id: c.entryId
				};
				switch (b) {
				case "ext":
					a.extend(d, {
						name: "ext",
						type: "text",
						text: "扩展字段",
						items: c.extParams
					});
					break;
				case "createTime":
					a.extend(d, {
						name: "createTime",
						type: "datetime",
						format: "yyyy-MM-dd HH:mm:ss",
						text: "提交时间"
					});
					break;
				case "updateTime":
					a.extend(d, {
						name: "updateTime",
						type: "datetime",
						format: "yyyy-MM-dd HH:mm:ss",
						text: "更新时间"
					});
					break;
				case "creator":
					a.extend(d, {
						name: "creator",
						type: "text",
						text: "提交人"
					});
					break;
				case "flowState":
					a.extend(d, {
						name: "flowState",
						type: "flowState",
						text: "流程状态"
					});
					break;
				case "chargers":
					a.extend(d, {
						name: "chargers",
						type: "chargers",
						text: "当前节点/负责人"
					});
					break;
				case "deleter":
					a.extend(d, {
						name: "deleter",
						type: "text",
						text: "删除人"
					});
					break;
				case "deleteTime":
					a.extend(d, {
						name: "deleteTime",
						type: "datetime",
						format: "yyyy-MM-dd HH:mm:ss",
						text: "删除时间"
					});
					break;
				default:
					return null
				}
				return d
			},
			createWidgetName: function () {
				return "_widget_" + fml.STATIC.IDBase++
			},
			formatFileSize: function (a) {
				return fml.Utils.isNumber(a) ? a >= 1e9 ? (a / 1e9).toFixed(2) + " GB" : a >= 1e6 ? (a / 1e6).toFixed(2) + " MB" : (a / 1e3).toFixed(2) + " KB" : "æœªçŸ¥"
			},
			chunkArray: function (a, b) {
				var c = [];
				if (!b || !a.length)
					return c;
				for (var d = 0, e = a.length; d < e; d += b) {
					var f = a.slice(d, d + b);
					c.push(f)
				}
				return c
			},
			UUID: function (a) {
				return a ? (a ^ 16 * Math.random() >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, this.UUID)
			},
			GCD: function (a, b) {
				return b ? this.GCD(b, a % b) : a
			},
			LCM: function (a, b) {
				return a * b / this.GCD(a, b)
			},
			fixDecimalPrecision: function (a, b) {
				var c = "";
				if (b || (b = 8), !this.isEmpty(a)) {
					var d = parseFloat(a);
					if (!isNaN(d)) {
						var e = (d + "").split(".")[1];
						c = e && e.length > b ? parseFloat(d.toFixed(b)) : d,
						b > 6 && Math.abs(c) < 1 && /e-/.test(c + "") && (c = parseFloat(d.toFixed(6)))
					}
				}
				return c
			},
			getSelectionText: function () {
				return window.getSelection ? window.getSelection().toString() : document.selection && document.selection.createRange ? document.selection.createRange().text : ""
			},
			getCorpType: function (a) {
				return a ? (a = a.toLowerCase(), /^ding/.test(a) ? "dingtalk" : /^w/.test(a) ? "wechat" : "internal") : null
			},
			isCorpSuiteAdmin: function (a) {
				return a && ("dingtalk" === a || "wechat" === a)
			},
			getWeekStartDate: function (a) {
				var b = a.getDay();
				return 0 === b && (b = 7),
				new Date(a.getFullYear(), a.getMonth(), a.getDate() - (b - 1))
			},
			getWeekEndDate: function (a) {
				var b = a.getDay();
				return 0 === b && (b = 7),
				new Date(a.getFullYear(), a.getMonth(), a.getDate() + (7 - b))
			},
			getMonthStartDate: function (a) {
				return new Date(a.getFullYear(), a.getMonth(), 1)
			},
			getMonthEndDate: function (a) {
				return new Date(a.getFullYear(), a.getMonth() + 1, 0)
			},
			setPageTitle: function (a) {
				fml.Utils.isEmpty(a) || (document.title = a)
			},
			createMask: function (b, c) {
				var d = a('<div class="x-window-mask"/>'),
				e = c || {};
				if (e.isModal && d.addClass("modal"), e.isLight ? d.addClass("light") : e.isDark && d.addClass("dark"), e.hasLoader) {
					var f = !e.isDark;
					this.createLoadIcon(d, f)
				}
				return b && d.css({
					"z-index": fml.STATIC.zIndex++
				}).appendTo(b),
				d
			},
			createLoadIcon: function (b, c) {
				var d = a('<div class="x-loader-icon"/>').appendTo(b);
				return c && d.addClass("colorful"),
				a("<div/>").appendTo(d),
				d
			},
			doPrint: function (b, c) {
				a("body").children("div").addClass("x-ui-notprint");
				var d = a("#x-printer").removeClass().empty();
				0 === d.length && (d = a('<div id="x-printer"/>').appendTo("body")),
				b && d.append(b),
				c = fml.Utils.isNull(c) ? 0 : c,
				setTimeout(function () {
					window.print()
				}, c)
			},
			cancelPrint: function () {
				a("body").children(".x-ui-notprint").removeClass("x-ui-notprint"),
				a("#x-printer").remove()
			},
			copyToClipboard: function (a, b) {
				if (a && a.length) {
					var c = document.createElement("textarea");
					c.style.background = "transparent",
					c.style.color = "transparent",
					c.value = a,
					document.body.appendChild(c),
					c.select();
					var d;
					try {
						d = document.execCommand("copy")
					} catch (a) {
						d = !1
					}
					document.body.removeChild(c),
					d && fml.Utils.applyFunc(this, b, [], !1)
				}
			},
			getColorNumber: function (a) {
				return fml.Utils.isEmpty(a) ? 1 : parseInt(a.toString().substring(0, 8), 16) % 6 + 1
			},
			getFieldAttr: function (b, c) {
				if (!fml.Utils.isValueWidget(b.widget.type))
					return null;
				if (c && c.indexOf(b.widget.type) < 0)
					return null;
				var d = {
					id: b.formId,
					text: b.label,
					name: b.widget.widgetName,
					type: b.widget.type
				};
				switch (b.widget.type) {
				case "subform":
					var e = [];
					fml.Utils.forEach(b.widget.items, function (d, f) {
						a.extend(f, {
							formId: b.formId
						});
						var g = fml.Utils.getFieldAttr(f, c);
						g && (a.extend(g, {
								subform: b.widget.widgetName
							}), e.push(g))
					}),
					a.extend(d, {
						items: e
					});
					break;
				case "linkdata":
					a.extend(d, {
						linkForm: b.widget.linkForm,
						linkFields: b.widget.linkFields,
						refAppId: b.widget.refAppId
					});
					break;
				case "combo":
				case "combocheck":
				case "radiogroup":
				case "checkboxgroup":
					a.extend(d, {
						async: b.widget.async,
						items: b.widget.items
					});
					break;
				case "datetime":
					a.extend(d, {
						format: b.widget.format
					})
				}
				return d
			},
			leftPad: function (a, b, c) {
				var d = String(a);
				for (c || (c = " "); d.length < b; )
					d = c + d;
				return d.toString()
			},
			startWith: function (a, b) {
				var c = a.length;
				return !(null == b || "" == b || 0 === c || b.length > c) && a.substr(0, b.length) == b
			},
			getFieldInfoByFormula: function (a) {
				var b = {},
				c = a + "",
				d = c.match(/(\$[0-9a-zA-Z\._]+)(#[0-9a-f]+)?(@[0-9a-f]+)?/),
				e = ["", "field", "entryId", "appId"];
				return fml.Utils.forEach(d, function (a, c) {
					0 !== a && c && (b[e[a]] = c.substr(1))
				}),
				b
			},
			getFieldInfoById: function (a) {
				var b = {};
				a = "#" + a;
				var c = a.match(/(#[0-9a-f]+)(@[0-9a-f]+)?/),
				d = ["", "entryId", "appId"];
				return fml.Utils.forEach(c, function (a, c) {
					0 !== a && c && (b[d[a]] = c.substr(1))
				}),
				b
			},
			isWpsWebView: function () {
				return /wpscloudform/.test(navigator.userAgent)
			},
			callWPSAPI: function (a) {
				var b = "jsAsynCall(" + JSON.stringify(a) + ")";
				window.cefQuery && window.cefQuery({
					request: b
				})
			},
			onWPSPageUnload: function (a, b) {
				a ? fml.Msg.alert({
					type: "warning",
					msg: "å½“å‰é¡µé¢æœªä¿å­˜ï¼Œæ˜¯å¦ç¡®å®šç¦»å¼€ï¼Ÿ",
					text4Ok: "ç¦»å¼€",
					text4Cancel: "å–æ¶ˆ",
					onOk: function () {
						fml.Utils.applyFunc(this, b, [], !1)
					}
				}) : fml.Utils.applyFunc(this, b, [], !1)
			},
			fileDownload: function (a, b) {
				if (fml.Utils.isWpsWebView()) {
					var c = {
						method: "downloadUrl",
						url: a,
						filename: b
					},
					d = b && b.split(".").pop();
					c.filter = "(*." + (d || "*") + ")",
					fml.Utils.callWPSAPI(c)
				} else
					fml.Utils.redirectTo(a)
			},
			isSupportPdf: function () {
				return "undefined" != typeof navigator.mimeTypes["application/pdf"]
			},
			dt: function (a, b) {
				if (a) {
					var c = ["e=" + a, "t=" + (new Date).getTime()];
					fml.Utils.isEmpty(b) || c.push("ext=" + b),
					fml.STATIC.user && fml.STATIC.user.username && c.push("u=" + fml.STATIC.user.username);
					var d = new Image;
					d.src = fml.CONFIG.HOST.TRACK_HOST + "/log?" + c.join("&")
				}
			}
	}
	fml.Formula = {
			
	}
	fml.FormulaUsage = []
	fml.extend = function (b, c, d) {
		"object" == typeof c && (d = c, c = b, b = function () {
			c.apply(this, arguments)
		});
		var e = function () {},
		f = c.prototype;
		return e.prototype = f,
		b.prototype = new e,
		b.superclass = f,
		$.extend(b.prototype, d),
		b
	};
	fml.OB = function (a) {
		this.options = $.extend(this._defaultConfig(), a),
		this._beforeInit(),
		this._init(),
		this._afterInit()
		}, $.extend(fml.OB.prototype, {
			_defaultConfig: function () {
				return {
					onBeforeInit: null,
					onAfterInit: null
				}
			},
			_init: function () {},
			_beforeInit: function () {
				fml.Utils.applyFunc(this, this.options.onBeforeInit, [], !1)
			},
			_afterInit: function () {
				fml.Utils.applyFunc(this, this.options.onAfterInit, [], !1)
			},
	});
	fml.Widget = fml.extend(fml.OB, {
			_defaultConfig: function () {
				return $.extend(fml.Widget.superclass._defaultConfig.apply(this, arguments), {
					widgetName: "",
					baseCls: "",
					customCls: null,
					enable: !0,
					visible: !0,
					invalidateType: "blank"
				})
			},
			_init: function () {
				fml.Widget.superclass._init.apply(this, arguments),
				this._initRoot(),
				this._initNameEffects()
			},
			_afterInit: function () {
				this._initElementSize(),
				this._initVisualEffects(),
				this._initDefaultValue(),
				fml.Widget.superclass._afterInit.apply(this, arguments)
			},
			_initRoot: function () {
				var a = this.options;
				null != a.renderEl ? this.element = $(a.renderEl) : this.element = this._defaultRoot(),
				a.baseCls && this.element.addClass(a.baseCls),
				a.customCls && this.element.addClass(a.customCls)
			},
			_initNameEffects: function () {
				var a = this.options;
				a.widgetName || (a.widgetName = "_widget_" + fml.STATIC.IDBase++),
				this.element.attr({
					widgetName: a.widgetName
				})
			},
			_initElementSize: function () {
				this.doResize()
			},
			_initVisualEffects: function () {
				this.setEnable(this.options.enable),
				this.setVisible(this.options.visible)
			},
			_initDefaultValue: function () {
				var a = this.options;
				null != a.value ? this.setValue(a.value) : null != a.text && this.setText(a.text)
			},
			_defaultRoot: function () {
				return $("<div/>")
			},
			getWidgetByName: function (a) {
				return this.options.resultWidgets ? this.options.resultWidgets[a] : null
			},
			getWidgetName: function () {
				return this.options.widgetName
			},
			getWidgetType: function () {
				return this.options.type
			},
			getText: function () {
				return this.options.text
			},
			setText: function (a) {
				this.options.text = a
			},
			getValue: function () {
				return this.options.value
			},
			setValue: function (a) {
				this.options.value = a
			},
			isEnabled: function () {
				return this.options.enable
			},
			setEnable: function (a) {
				this.options.enable = !!a,
				this.options.enable === !0 ? this.element.removeClass("x-ui-disable") : this.element.addClass("x-ui-disable")
			},
			isVisible: function () {
				return this.options.visible
			},
			setVisible: function (a) {
				this.options.visible = !!a,
				this.options.visible === !0 ? this.element.removeClass("x-ui-hidden") : this.element.addClass("x-ui-hidden")
			},
			reset: function () {
				this.setValue(null)
			},
			doResize: function (a) {
				var b = this.options;
				a && (b.width = a.width, b.height = a.height),
				fml.Utils.isEmpty(b.width) || this.element.css({
					width: b.width
				}),
				fml.Utils.isEmpty(b.height) || this.element.css({
					height: b.height
				})
			},
			destroy: function () {
				this.element.remove()
			},
			rebuild: function () {
				this.options.renderEl = this.element,
				this.element.empty(),
				this._beforeInit(),
				this._init(),
				this._afterInit()
			},
			checkValidate: function () {
				return !0
			},
			fireEvent: function (a, b) {
				this.element.trigger(a, b)
			},
			getOptions: function () {
				var a = this.options;
				return {
					type: a.type,
					widgetName: a.widgetName,
					customCls: a.customCls,
					height: a.height,
					width: a.width,
					text: a.text,
					value: a.value,
					enable: a.enable,
					visible: a.visible,
					allowBlank: a.allowBlank,
					rely: a.rely
				}
			},
			getInvalidateType: function () {
				return this.options.invalidateType
			},
			setInvalidateType: function (a) {
				this.options.invalidateType = a
			},
			getNullValue: function () {
				return null
			},
			getLinkValue: function () {
				return this.getValue()
			},
			getLinkType: function () {
				return this.getWidgetType()
			},
	})


	fml.FormulaEditor = {
		CONST: {
			NAME_FILED_CLS: "cm-field-name",
			VALUE_FIELD_CLS: "cm-field-value",
			INVALID_FIELD_CLS: "cm-field-invalid",
			DEPRECATE_FIELD_CLS: "cm-deprecate"
		},
		_defaultConfig: function () {
			return a.extend(fml.FormulaEditor.superclass._defaultConfig.apply(), {
				baseCls: "x-formula-editor",
				keywords: [],
				text: "学号",
				hasFunction: !0,
				labelMap: null
			})
		},
		_init: function () {
			// fml.FormulaEditor.superclass._init.apply(this, arguments);
			var b = {
						baseCls: "x-formula-editor",
						keywords: [],
						text: "表达式",
						hasFunction: !0,
						labelMap: null
					},
			c = "<li>请从左侧面板选择包含的字段名</li>";
			this.element = $("."+b.baseCls);
			console.log(this.element);
			var that = this;
			b.hasFunction && (c += '<li>支持<span class="x-c-red">英文</span>运算符模式下的基础运算及部分<a target="jdy_doc" href="/192272" class="x-c-key">高级函数</a></li><li>公式编辑样式举例:<span class="formula-key">SUM</span>(<span class="formula-field">基本工资</span>,<span class="formula-field">加班工资</span>)</li>', this.element.addClass("has-func")),
			this.element.append(a('<div class="formula-head"/>').append(a('<span class="formula-name"/>').text(b.text)).append(a('<span class="formula-equal"/>').text("=")).append(a('<span class="formula-action formula-redo"  title="前进"/>').text(">")).append(a('<span class="formula-action formula-undo" title="后退"/>').text("<"))),
			this.editor = CodeMirror(this.element[0], {
					keywords: b.keywords,
					textWrapping: !0,
					lineWrapping: !0,
					lineNumbers: !1,
					matchBrackets:!0,
					specialChars: /[\u0000-\u001f\u007f\u00ad\u200c-\u200f\u2028\u2029\ufeff]/,
					mode: "formula"
				}),
				// 监听编辑器内容变化，确保所有元素都不可拖动
				// 禁用拖动事件
				this.editor.getWrapperElement().addEventListener("dragstart", (event) => {
					event.preventDefault();
				}),
				
				// 禁用放置事件
				this.editor.getWrapperElement().addEventListener("drop", (event) => {
					event.preventDefault();
				})
			this.editor.on("change", function (cm, event) {
				if(event.origin!="complete"){//未选中
					cm.showHint({
						hint:CodeMirror.hint.formula,
						completeSingle:false,
						shown:function(){
							console.log("显示了")
						},
						select:function(cpt,ele){
							console.log(cpt,ele)
						},
						pick:function(item){
							console.log(item);
						}
					});
				}else{
					that.insertBarcket();
				}
				setTimeout(() => {
					that.updateExpShow();
				}, 50);
				
			}),
			// 阻止粘贴
			this.editor.on("paste", function(cm, event) {
				event.preventDefault();
			}),
			// 输入
			this.editor.on("keydown", function(cm, event) {
				// 允许的键码
				const allowedKeys = getAllowCode(event);
			
				if (!allowedKeys.includes(event.keyCode)) {
					event.preventDefault();
				}
			
			}),
		
			this.editor.addKeyMap({
				Backspace: function (a) {
					var b = a.getTokenAt(a.getCursor());
					if ("field" == b.type) {
						var c = a.getCursor().line;
						a.setSelection(new CodeMirror.Pos(c, b.start), new CodeMirror.Pos(c, b.end)),
						a.replaceSelection("", null, "+delete")
					} else
						a.execCommand("delCharBefore")
				}
			});
			a(".formula-redo").click(function(){
				that.editor.redo();
			});
			a(".formula-undo").click(function(){
				that.editor.undo();
			});
			// this.editor.addOverlay({
			// 	token: function(stream) {
			// 	  if (stream.match(/\(.+\)/)) { // 匹配目标文本，例如 "targetText"
			// 		return 'highlight-bracket-content';      // 返回样式名
			// 	  } else {
			// 		stream.next();                  // 跳到下一个字符
			// 		return null;
			// 	  }
			// 	}
			//   });
			var currentMark;
			this.editor.on('cursorActivity', function() {
				let cursor = that.editor.getCursor();
				let line = that.editor.getLine(cursor.line);

				// 清除之前的标记并高亮新匹配内容
				if (currentMark) {
					currentMark.clear();
					currentMark = null;
				}

				// 查找光标前的匹配括号
				let openPos = line.slice(0, cursor.ch).search(/\(/g);
				if (openPos === -1) return; // 如果找不到，返回

				// 查找光标后方的匹配括号
				let closePos = line.slice(cursor.ch).search(/\)/g);
				if (closePos === -1) return; // 如果找不到，返回

				// 确定匹配的开始和结束位置
				let from = { line: cursor.line, ch: openPos };
				let to = { line: cursor.line, ch: cursor.ch + closePos + 2 }; // 包含整个 */ 符号
				// that.editor.addLineClass(from.line, 'background', 'highlight-bracket-content');
				// that.editor.addLineClass(to.line, 'background', 'highlight-bracket-content');
				// that.editor.markText(
				// 	{ line: 1, ch: 2 },    // 开始位置
				// 	{ line: 1, ch: 6 },    // 结束位置
				// 	{ className: 'highlight-bracket-content' }
				//   );
				// 创建一个自定义的 DOM 元素
				const highlightNode = document.createElement('span');
				highlightNode.textContent = 'highlighted';
				highlightNode.className = 'highlight-bracket-content';

				// 用 widget 替换文本区域
				that.editor.markText(
				{ line: 1, ch: 2 },
				{ line: 1, ch: 6 },
				{ replacedWith: highlightNode }
				);
				// currentMark = that.editor.markText(from, to, { className: 'highlight-bracket-content' });
			  });
		},
		insertFormulaFunction:function(conf){
			var a = {
				id:Math.random()*1e18,
				name:"function",
				text:conf.text,
				value:conf.value
			}
			console.log(a);
			this.insertField(a,true);//如果是当前表单的工作项 则不需要第二个参数

			//插入括号
			var b1 = {
				id:Math.random()*1e18,
				name:"i009",
				text:"(",
				value:"("
			}
			console.log(b1);
			this.insertField(b1,true);//如果是当前表单的工作项 则不需要第二个参数
			//插入括号
			//插入括号
			var b2 = {
				id:Math.random()*1e18,
				name:"i010",
				text:")",
				value:")"
			}
			console.log(b2);
			this.insertField(b2,true);//如果是当前表单的工作项 则不需要第二个参数
		},
		insertFormulaInfo:function(conf){
			var a = {
				id:Math.random()*1e18,
				name:"info",
				text:conf.text,
				value:conf.value
			}
			console.log(a);
			this.insertField(a,true);//如果是当前表单的工作项 则不需要第二个参数

			
		},
		/**
		 * 插入（）
		 * @return {[type]} [description]
		 */
		insertBarcket:function(){
			var that = this;
			var c = that.editor.getCursor();
			that.editor.replaceSelection("(");
			var d = that.editor.getCursor();
			$(that.editor.markText(c,d,{
				handleMouseEvents:!0,
				atomic:!0,
				replaceWith:$('<span class="cm-bracket CodeMirror-matchingbracket">(</span>')[0]
			}).widgetNode);
			var c1 = that.editor.getCursor();
			that.editor.replaceSelection(")");
			var d1 = that.editor.getCursor();
			$(that.editor.markText(c1,d1,{
				handleMouseEvents:!0,
				atomic:!0,
				replaceWith:$('<span class="cm-bracket CodeMirror-matchingbracket">)</span>')[0]
			}).widgetNode);
			that.editor.setCursor(d);
			that.editor.focus();
		},
		_markField: function (t) {
			var i = "",
				n = {
					"class":"flow-exp-filed-"+t.field,
					"data-field": t.field,
					"data-value":t.value,
					"contentEditable":t.editable,
					"data-json":JSON.stringify(t.data)
				}
			
			var replaceWidth = $('<span class="cm-field ' + i + '">'+"</span>");
			var showDom ;
			if(t.editable==true){
				showDom = this.getEditDom(t.edittype,t.regx,t.text,t.outervalue);
				// showDom.value = t.text;
				if(t.outervalue!=null){
					replaceWidth.append(t.outervalue);
				}
				replaceWidth.append(showDom);
				if(t.outervalue!=null){
					replaceWidth.append(t.outervalue);
				}
			}else{
				replaceWidth.text(t.text);
			}
			t.invalid ? i = this.CONST.INVALID_FIELD_CLS : t.entry ? (i = this.CONST.NAME_FILED_CLS, n["data-entry"] = t.entry) :
				i = this.CONST.VALUE_FIELD_CLS, $(this.editor.markText(t.from, t.to, {
				handleMouseEvents: !0,
				atomic: !0,
				replacedWith: replaceWidth[0]
			}).widgetNode).attr(n).addClass(i)
			if(t.editable==true){
				a(showDom).parents(".cm-field-name").attr("data-value",showDom.value)
			}

		},
		/**
		 * 插入工作项
		 * @param  {[type]} a [description]
		 * @param  {[type]} b [description]
		 * @return {[type]}   [description]
		 */
		insertField: function (a, b) {


			var c = this.editor.getCursor();
			this.editor.replaceSelection("" + a.text + "");
			var d = this.editor.getCursor();
			d.outside = true;
			d.xRel = 2;
			c.xRel = 2;
			e = {
				from: c,
				to: d,
				field: a.name,//工作项ID
				entry: b ? a.id : null,//工作项所属的表单id
				text:a.text,
				value:a.value,
				editable:a.editable,
				edittype:a.edittype,
				regx:a.regx,
				outervalue:a.outervalue,
				data:a
				
			};
			this._markField(e),
			this.refreshAndFocus(100);
		},
		checkValidate: function () {
			var b = a(this.editor.display.lineDiv);
			return b.find("span." + this.CONST.DEPRECATE_FIELD_CLS).length > 0 ? (this.setInvalidateType("deprecated field"), !1) : b.find("span." + this.CONST.INVALID_FIELD_CLS).length > 0 ? (this.setInvalidateType("invalid field"), !1) : (this.setInvalidateType(null), !0)
		},
		destory:function(){
			this.element.remove()
			this.editor = null;
			globalDom.empty();
		},
		getHtml:function(){
			return a(this.editor.display.lineDiv).find("pre:first>span")[0].innerHTML;
		},
		setHtml:function(html){
			a(this.editor.display.lineDiv).find("pre:first>span")[0].innerHTML = html;
			var d = this.editor.getCursor();
			this.editor.setCursor(d);
			this.editor.focus();
			// a(this.editor.display.lineDiv).find("pre:first>span");
		},
		getEditDom:function(edittype,regx,value,outervalue){
			var that = this;
			if(value == expEmptyStr){
				value="";
			}
			const input = document.createElement("input");
			input.type="text";
			input.className = "f-input";
			input.value = value;
			input.style='font-size: 12px;font-family: "黑体", "Heiti SC", "Blod";text-align: center;border:none;background:none;';
			input.placeholder=`请输入${({"string":"文字","number":"数字"})[edittype]}...`;
			var oldValue = input.value;


			// 阻止 CodeMirror 处理此 input 的聚焦事件
			input.addEventListener("mousedown", (e) => {
				e.stopPropagation();
				try {
					that._markFieldeditor.getWrapperElement().classList.add("cm-focused");
				} catch (error) {
					
				}
			});
			
			// 设置在点击时将焦点放在 input 上
			input.addEventListener("focus", () => {
				try {
					that._markFieldeditor.getWrapperElement().classList.add("cm-focused");
				} catch (error) {
					
				}
				
			});
			const widthCalculator = document.getElementById("width-calculator");
			// 自动调整宽度的函数
			function adjustInputWidth() {
				// 将 input 的值复制到隐藏的 span 中
				widthCalculator.textContent = (input.value!=null && input.value!="")?input.value:input.placeholder;
				
				// 获取 span 的宽度并应用到 input 上
				input.style.width = (widthCalculator.offsetWidth+4) + "px";
				that.refreshAndFocus(1000,false);
				
			}

			// 初始化宽度
			adjustInputWidth();
			
			// 监听 input 的输入事件
			input.addEventListener("input", function(e){
				if(edittype === "number"){
					this.value = this.value.replace(/^0+/g,"0");
					this.value = this.value.replace(/^-0+/g,"-0");
	
					if(/^0\d/g.test(this.value)){//09 -> 9
						this.value = this.value.replace(/^0/g,"");
					}
					if(/^-0\d/g.test(this.value)){//-09 -> -9
						this.value = this.value.replace(/^-0/g,"-");
					}
					this.value = this.value.replace(/^\.+/g,"0.");
					this.value = this.value.replace(/^-\.+/g,"-0.");
	
				}else if(edittype == "string"){
				}

				if(regx !=null &&this.value !="" && !new RegExp(regx,"g").test(this.value)){
					if(oldValue != null){
						this.value = oldValue;
					}else{
						this.value = "";
					}
				}
				oldValue = this.value;
				adjustInputWidth();
				a(this).parents(".cm-field-name").attr("data-value",this.value);
				setTimeout(() => {
					that.updateExpShow();
				}, 50);
			});






			return input;
		},
		getEditDom1:function(){
			// 创建一个 contenteditable 的 <span>
			const span = document.createElement("span");
			span.contentEditable = "true";
			span.className = "editable-span";  // 可以用于样式自定义
			span.innerText = "Click to edit";
			// 阻止 CodeMirror 处理此 input 的聚焦事件
			span.addEventListener("mousedown", (e) => {
				e.stopPropagation();
			});
			
			// 设置在点击时将焦点放在 input 上
			span.addEventListener("focus", () => {
				that._markFieldeditor.getWrapperElement().classList.add("cm-focused");
			});
			return span;
			// // 插入到 CodeMirror 中
			// const widget = this.editor.addWidget({line: 0, ch: 0}, span, true);
	
			// // 添加事件以在内容变化时同步回 CodeMirror（可选）
			// span.addEventListener("input", () => {
			//   console.log("Span content:", span.innerText);  // 你可以在这里处理新输入的内容
			// });x
		},
		refreshTime:null,
		refreshAndFocus:function(time,focus){
			if(this.refreshTime!=null){
				clearTimeout(this.refreshTime);

			}
			var that = this;
			this.refreshTime = setTimeout(function(){
				that.editor.refresh(); // 在内容改变后刷新 CodeMirror
				if(focus!=false){
					that.editor.focus();
				}
				that.refreshTime = null;
			},time||500);
		},
		setExpData:function(data){
			this.editor.setValue(''); // 将内容设置为空字符串
			for(var i = 0, len = data.length; i < len; i ++){
				var item = data[i];
				this.insertField(item,true);
			}
			this.refreshAndFocus(800);
			
		},
		getExpData:function(){
			var b = [];
			var c = this.CONST;
			var d = [];
			var e = a(this.editor.display.lineDiv).find("pre:first>span");
			return fml.Utils.forEach(e, function (e, f) {
				fml.Utils.forEach(a(f).children("span"), function (b, e) {
					var f = a(e).attr("data-value");
					var data = a(e).attr("data-json");
					data = JSON.parse(data);
					if(data.editable == true){
						data.value = f;
						data.text = f;
					}
					
					d.push(data);
				});
				
			}), d
		},
		updateExpShow(){
			var exp = this.getExpValue().formula;
			if(exp ==null || exp == ""){
				exp = "无公式";
			}
			globalDom.find(".exp-show-value").text(exp);
		},
		getExpValue:function(){
			var b = [],
			c = this.CONST,
			d = [],
			e = a(this.editor.display.lineDiv).find("pre:first>span");
			return fml.Utils.forEach(e, function (e, f) {
				var g = [];
				fml.Utils.forEach(a(f).children("span"), function (b, e) {
					var f = a(e).attr("data-value");
					var data = a(e).attr("data-json");
					try {
						data = JSON.parse(data);
					} catch (error) {
						return true;
					}
					
					if(data.outervalue!= null){
						g.push(`${data.outervalue}${f}${data.outervalue}`);
					}else{
						g.push(`${f}`);
					}
					
				});
				var h = g.join(" ").replace(/\u200b/g, "").replace(/\u00a0/g, " ");
				b.push(h)
			}), {
				formula: b.join("\n"),
				relyWidgets: d
			}
		},
		getText:function(){
			var b = [],
			c = this.CONST,
			d = [],
			e = a(this.editor.display.lineDiv).find("pre:first>span");
			return fml.Utils.forEach(e, function (e, f) {
				var g = [];
				fml.Utils.forEach(a(f).children("span"), function (b, e) {
					
					
					var data = a(e).attr("data-json");
					data = JSON.parse(data);
					var f = data.text;
					if(data.editable == true){
						f = a(e).attr("data-value");
					}

					if(data.outervalue!= null){
						g.push(`${data.outervalue}${f}${data.outervalue}`);
					}else{
						g.push(`${f}`);
					}
					
				});
				var h = g.join(" ").replace(/\u200b/g, "").replace(/\u00a0/g, " ");
				b.push(h)
			}), {
				formula: b.join("\n"),
				relyWidgets: d
			}
		},
		getValue: function () {
			var b = [],
			c = this.CONST,
			d = [],
			e = a(this.editor.display.lineDiv).find("pre:first>span");
			return fml.Utils.forEach(e, function (e, f) {
				var g = [];
				fml.Utils.forEach(a(f).children("span"), function (b, e) {
					var f = a(e).attr("data-field"),
					h = a(e).attr("data-entry");
					if (a(e).hasClass(c.NAME_FILED_CLS))
						g.push("$" + f + "#" + h);
					else if (a(e).hasClass(c.VALUE_FIELD_CLS))
						g.push("$" + f + "#"), d.indexOf(f) === -1 && d.push(f);
					else {
						if (a(e).hasClass(c.DEPRECATE_FIELD_CLS) || a(e).hasClass(c.INVALID_FIELD_CLS))
							return;
						g.push(a(e).text())
					}
				});
				var h = g.join("").replace(/\u200b/g, "").replace(/\u00a0/g, " ");
				b.push(h)
			}), {
				formula: b.join("\n"),
				relyWidgets: d
			}
		},
		setValue: function (a) {
			var b = this,
			c = this.options,
			d = [],
			e = [];
			if (a) {
				var f = a.split("\n");
				fml.Utils.forEach(f, function (a, b) {
					var f = "",
					g = b.split(/(\$[0-9a-zA-Z\._#@]+)/g);
					fml.Utils.forEach(g, function (b, d) {
						if (/^\$(_widget_|_formula_|ext)/.test(d)) {
							var g;
							fml.Utils.startWith(d, "$ext") ? g = "扩展字段" : c.labelMap && (g = c.labelMap[d]);
							var h = !1;
							fml.Utils.isNull(g) && (g = "无效字段", h = !0);
							var i = d.replace("$", "").split("#"),
							j = i[0],
							k = i[1],
							l = CodeMirror.Pos(a, f.length);
							f += "" + g + "";
							var m = CodeMirror.Pos(a, f.length);
							e.push({
								from: l,
								to: m,
								field: j,
								entry: k,
								invalid: h
							})
						} else
							f += d
					}),
					d.push(f)
				})
			}
			this.editor.setValue(d.join("\n")),
			fml.Utils.forEach(e, function (a, c) {
				b._markField(c)
			})
		}
	};
	fml.Calculate = fml.extend(fml.Widget,{
		_calFormula:function (a, b) {
				var c = this,
				d = a.split(/(\$[0-9a-zA-Z\._#@]+)/g),
				e = [];
				fml.Utils.forEach(d, function (a, d) {
					if (fml.Utils.startWith(d, "$_widget_") || fml.Utils.startWith(d, "$ext")) {
						var f = d.replace("$", "").split("#"),
						g = f[0],
						h = f[1];
						console.log(f);
						if (fml.Utils.isEmpty(h)) {
							var i;
							if (b)
								i = b[g];
							else {
								var j = c.getWidgetByName(g);
								fml.Utils.isArray(j) ? (i = [], fml.Utils.forEach(j, function (a, b) {
										i.push(b.getLinkValue())
									})) : j && (i = j.getLinkValue())
							}
							var k = JSON.stringify(i) + "";
							!isNaN(i) && i < 0 && (k = "(" + k + ")"),
							e.push(k)
						} else
							e.push('"' + d + '"')
					} else
						e.push(d)
				});
				var f;
				try {
					console.log(e.join(""));
					f = fml.Utils.evalFormula(e.join(""));
					console.log(f);
				} catch (a) {
					f = ""
				}
				return f
			}
	})

	CodeMirror.fomulaContext = Object.keys(fml.Formula);

	fml.FormulaEditor._init();

	

	/**
	 * 点击工作项
	 * @param  {[type]} ){	var it            [description]
	 * @return {[type]}         [description]
	 */
	// $(".field-list .field").click(function(){
	// 	var it = $(this);
	// 	var a = {
	// 		id:Math.random()*1e18,
	// 		name:it.attr("name"),
	// 		text:it.find("span").text()
	// 	}
	// 	console.log(a);
	// 	fml.FormulaEditor.insertField(a,true);//如果是当前表单的工作项 则不需要第二个参数
	// });
	function getInsertObject(iid){
		return ({
			"i-001":{
				"text":">",
				"value":">",
				"name":"i001",
				"editable":false
			},
			"i-002":{
				"text":"<",
				"value":"<",
				"name":"i002",
				"editable":false
			},
			"i-003":{
				"text":"==",
				"value":"==",
				"name":"i003",
				"editable":false
			},
			"i-004":{
				"text":"!=",
				"value":"!=",
				"name":"i004",
				"editable":false
			},
			"i-005":{
				"text":">=",
				"value":">=",
				"name":"i005",
				"editable":false
			},
			"i-006":{
				"text":"<=",
				"value":"<=",
				"name":"i006",
				"editable":false
			},
			"i-007":{
				"text":"且",
				"value":"&&",
				"name":"i007",
				"editable":false
			},
			"i-008":{
				"text":"或",
				"value":"||",
				"name":"i008",
				"editable":false
			},
			"i-009":{
				"text":"(",
				"value":"(",
				"name":"i009",
				"editable":false
			},
			"i-010":{
				"text":")",
				"value":")",
				"name":"i010",
				"editable":false
			},
			"i-011":{
				"text":expEmptyStr,
				"value":expEmptyStr,
				"name":"i011",
				"editable":true,
				"edittype":"number",
				"regx":"^-?(\\d+(\\.?\\d*)?)?$"
			},
			"i-012":{
				"text":expEmptyStr,
				"value":expEmptyStr,
				"outervalue":"\"",
				"name":"i012",
				"editable":true,
				"edittype":"string",
				// "regx":/^$/g
			},
			"i-013":{
				"text":"TRUE",
				"value":"true",
				"name":"i013",
				"editable":false
			},
			"i-014":{
				"text":"FALSE",
				"value":"false",
				"name":"i014",
				"editable":false
			},
			"i-015":{
				"text":"NULL",
				"value":"nil",
				"name":"i015",
				"editable":false
			},
			"i-016":{
				"text":",",
				"value":",",
				"name":"i016",
				"editable":false
			},

			//运算符号
			"i-101":{//加号
				"text":"+",
				"value":"+",
				"name":"i101",
				"editable":false
			},
			"i-102":{//减号
				"text":"-",
				"value":"-",
				"name":"i102",
				"editable":false
			},
			"i-103":{//乘号
				"text":"×",
				"value":"*",
				"name":"i103",
				"editable":false
			},
			"i-104":{//除法号
				"text":"÷",
				"value":"/",
				"name":"i104",
				"editable":false
			},
			"i-105":{//in
				"text":"In",
				"value":"in",
				"name":"i105",
				"editable":false
			},
			"i-106":{//not in
				"text":"NotIn",
				"value":"not in",
				"name":"i106",
				"editable":false
			},
			"i-107":{//非
				"text":"非",
				"value":"!",
				"name":"i107",
				"editable":false
			}
		})[iid];
	}
	//允许输入的键盘
	function getAllowCode(event){
		var isCtrl = event.ctrlKey;
		var isAlt = event.altKey;
		var isShift = event.shiftKey;
		var isMeta = event.metaKey;

		if(isCtrl){
			return [
				65, //windows全选
				86 //windows粘贴
			];
		}else if(isAlt){
			return [];
		}else if(isShift){
			return [];
		}else if(isMeta){
			return [
				65, //mac全选
				86 //mac粘贴
			];
		}else{
			return [
				8,//删除
				37, // 左箭头
				38, // 上箭头
				39, // 右箭头
				40, // 下箭头
				46   // Delete
	
			];
		}
		
	}
	$(".header-content .header-item").click(function(){
		var it = $(this);
		var iid = it.attr("iid");
		var conf = getInsertObject(iid);
		var a = {
			id:Math.random()*1e18,
			name:conf.name,
			text:conf.text,
			value:conf.value,
			editable:conf.editable,
			edittype:conf.edittype,
			regx:conf.regx,
			outervalue:conf.outervalue
		}
		console.log(a);
		fml.FormulaEditor.insertField(a,true);//如果是当前表单的工作项 则不需要第二个参数
	});

	/**
	 * 展开折叠函数
	 * @param  {[type]} ){	$(this).parent().toggleClass('expand');} [description]
	 * @return {[type]}                                               [description]
	 */
	$(".formula-category .title").click(function(){
		$(this).toggleClass('title-open');
		// $(this).parent().toggleClass('expand');

	});

	/**
	 * 点击函数插入编辑器中
	 * @type {fml}
	 */
	$(".formula-function .formula-item").mouseover(function(){
		var name = $(this).text(),list = fml.FormulaUsage,intro = $(".formula-intro .intro-wrapper");
		var currentFml;
		for(var i = 0;i<list.length;i++){
			var cate = list[i];
			for(var j = 0;j<cate.contains.length;j++){
				var con = cate.contains[j];
				if(name == con.name){
					currentFml = con;
					break;
				}
			}
		}
		if(currentFml){
			intro.html('<li class="intro"><span class="intro-txt">'+currentFml.name+'</span>'+(currentFml.intro.indexOf(currentFml.name)>-1?currentFml.intro.split(currentFml.name)[1]:currentFml.intro)+'</li><li class="usage">用法：<span class="formula-name">'+currentFml.name+'</span>('+currentFml.usage.split("(")[1]+'</li><li class="example">示例：'+currentFml.example+'</li>')
		}
	}).click(function(){
		fml.FormulaEditor.insertFormulaFunction($(this).text());
	});
	/**
	 * 点击函数插入编辑器中
	 * @type {fml}
	 */
	$(".formula-info .formula-item").mouseover(function(){
		var name = $(this).text(),list = fml.FormulaUsage,intro = $(".formula-intro .intro-wrapper");
		var currentFml;
		for(var i = 0;i<list.length;i++){
			var cate = list[i];
			for(var j = 0;j<cate.contains.length;j++){
				var con = cate.contains[j];
				if(name == con.name){
					currentFml = con;
					break;
				}
			}
		}
		if(currentFml){
			intro.html('<li class="intro"><span class="formula-name">'+currentFml.name+'</span>'+(currentFml.intro.indexOf(currentFml.name)>-1?currentFml.intro.split(currentFml.name)[1]:currentFml.intro)+'</li><li class="usage">用法：<span class="formula-name">'+currentFml.name+'</span>('+currentFml.usage.split("(")[1]+'</li><li class="example">示例：'+currentFml.example+'</li>')
		}
	}).click(function(){
		var title = $(this).parent("ul").attr("title")
		var value = $(this).attr("value");;
		var text = $(this).text();;
		fml.FormulaEditor.insertFormulaInfo({value:value,text:title+"."+text});
	})
	var calx = new fml.Calculate();
	var fomula = "SUM(getValue('$_widget_1493093397892#416299579043868800'),getValue('$_widget_1493093397940#'))";//最终执行函数的方式示例
	// calx._calFormula(fomula);
	var remarkMap = {};
	function UUIDCreator() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		  var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		  return v.toString(16);
		});
	  }
	function addFlowItemAction(jdm,func){
		jdm.find(".title").click(function(){
			$(this).toggleClass('title-open');
			// $(this).toggleClass('expand');
		});
		jdm.find(" .formula-item").mouseover(function(){
			var name = $(this).text(),list = fml.FormulaUsage,intro = $(".formula-intro .intro-wrapper");
			var remarkID = $(this).attr("markid");
			if(remarkID==null){
				return;
			}
			var remarkTxt = remarkMap[remarkID];
			if(remarkTxt !=null){
				intro.html(`<li class="intro"><span class="intro-txt">${remarkTxt}</span></li>`);
			}else{
				intro.html(`<li class="intro"><span class="intro-txt">暂无描述...</span></li>`);
			}
			
			var currentFml;
			
			if(currentFml){
				intro.html('<li class="intro"><span class="intro-txt">'+currentFml.name+'</span>'+(currentFml.intro.indexOf(currentFml.name)>-1?currentFml.intro.split(currentFml.name)[1]:currentFml.intro)+'</li><li class="usage">用法：<span class="formula-name">'+currentFml.name+'</span>('+currentFml.usage.split("(")[1]+'</li><li class="example">示例：'+currentFml.example+'</li>')
			}
		}).click(function(){
			if(func==true){
				var title = $(this).parent("ul").attr("title")
				var value = $(this).attr("value");;
				var text = $(this).text();;
				fml.FormulaEditor.insertFormulaFunction({value:value,text:text});
			}else{
				var title = $(this).parent("ul").attr("title")
				var value = $(this).attr("value");;
				var text = $(this).text();;
				fml.FormulaEditor.insertFormulaInfo({value:value,text:title+"."+text});
			}
			
		})
	}

	return {
		initFlowInfo:function(flowInfo){

			var hm = [];
			hm.push('<li class="formula-category formula-function">');
			for(var i = 0, ilen = flowInfo.length; i < ilen; i ++){
				var groupinfo = flowInfo[i];
				var title = groupinfo.title;
				var children = groupinfo.children;
				hm.push(`<div class="title"><i class="angle-icon icon-angleright"></i>${title}</div>`);
				hm.push(`<ul class="children" title="${title}" id="function_1" >`);
				for(var j = 0, jlen = children.length; j < jlen; j ++){
					var item = children[j];
					var itemTitle = item.title;
					var exp = item.exp;
					var remark = item.remark;
					var rid = UUIDCreator();
					if(remark != null){
						remarkMap[rid] = remark;
					}else{
						remarkMap[rid] = "暂无描述...";
					}
					hm.push(`<li class="formula-item" markid="${rid}" value="${exp}">${itemTitle}</li>`);
				}
				hm.push(`</ul>`);
			}
			hm.push('</li>');
			var jdm = $(hm.join(""));
			addFlowItemAction(jdm);
			globalDom.find("#flow-info").append(jdm);
			
		},
		initFlowFunc:function(flowFunc){
			var hm = [];
			hm.push('<li class="formula-category formula-function">');
			for(var i = 0, ilen = flowFunc.length; i < ilen; i ++){
				var groupinfo = flowFunc[i];
				var title = groupinfo.title;
				var children = groupinfo.children;
				
				hm.push(`<div class="title"><i class="angle-icon icon-angleright"></i>${title}</div>`);
				hm.push(`<ul class="children" title="${title}" id="function_1" >`);
				for(var j = 0, jlen = children.length; j < jlen; j ++){
					var item = children[j];
					var itemTitle = item.title;
					var exp = item.exp;
					var remark = item.remark;
					var rid = UUIDCreator();
					if(remark != null){
						remarkMap[rid] = remark;
					}else{
						remarkMap[rid] = "暂无描述...";
					}
					hm.push(`<li class="formula-item" markid="${rid}" value="${exp}">${itemTitle}</li>`);
				}
				hm.push(`</ul>`);
			}
			hm.push('</li>');
			var jdm = $(hm.join(""));
			addFlowItemAction(jdm,true);
			globalDom.find("#flow-func").append(jdm);
		},
		getValue:function(){
			return fml.FormulaEditor.getExpValue().formula;
		},
		getExpData:function(){
			return fml.FormulaEditor.getExpData();
		},
		setExpData:function(data){
			fml.FormulaEditor.setExpData(data);
		},
		getText:function(){
			return fml.FormulaEditor.getText().formula;

		},
		destory:function(){
			fml.FormulaEditor.destory();
		},
		getEditor:function(){
			return fml.FormulaEditor.editor;
		}
	}


}

