!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.ScrollListView=e()}}(function(){return function e(t,l,i){function n(s,o){if(!l[s]){if(!t[s]){var h="function"==typeof require&&require;if(!o&&h)return h(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=l[s]={exports:{}};t[s][0].call(c.exports,function(e){var l=t[s][1][e];return n(l?l:e)},c,c.exports,e,t,l,i)}return l[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t){function l(e){this.element=e.element,this.elementStyle=e.element.style,this.cells=null,this.data=e.data,this.CELLHEIGHT=e.cellHeight,this.cellsWithinViewportCount=2*Math.ceil(i/this.CELLHEIGHT),this.cellsOutOfViewportCount=this.cellsWithinViewportCount,this.cellsFrag=document.createDocumentFragment(),this.direction=0,this.isScrollingDown=!0,this.currentCell=null,this.cellIndex=1,this.isTopCellOutOfView=!1,this.renderFn=e.renderFn,this.renderCellFn=e.renderCellFn,this.render(),window.addEventListener("scroll",this.onScroll.bind(this),!1)}var i=e("./utils").winHeight,n=e("./utils").body,r=e("./utils").slice,s=e("./utils").orderProp,o=e("./utils").scrollTop,h=e("./utils").lastScrollTop;t.exports=l,l.prototype={render:function(){this.renderFn||console.error("You need to define a renderFn"),this.renderFn.call(this,this.cellsWithinViewportCount)},renderCell:function(e,t){this.renderCellFn||console.error("You need to define a renderCellFn"),this.renderCellFn.call(this,e,t)},isTopElementOutOfViewport:function(e){var t=e.getBoundingClientRect();return!!t&&t.bottom<=-(2*this.CELLHEIGHT)},isBottomElementOutOfViewport:function(e){var t=e.getBoundingClientRect();return!!t&&t.top>i+2*this.CELLHEIGHT},onScroll:function(){o=n.scrollTop,this.direction=o-h,this.checkCells()},getCurrentCell:function(e){return this.cells[e%this.cells.length]},checkCells:function(){this.cells=this.cells||r.call(this.element.children),this.isScrollingDown=this.direction>0,this.currentCell=this.getCurrentCell(this.cellsOutOfViewportCount),this.isScrollingDown?(this.isTopCellOutOfView=this.isTopElementOutOfViewport(this.currentCell),this.isTopCellOutOfView&&this.cellsOutOfViewportCount<this.data.length&&(this.cellsOutOfViewportCount++,this.cellIndex=this.cellsOutOfViewportCount,this.elementStyle.paddingTop=parseInt(this.elementStyle.paddingTop||0,10)+this.CELLHEIGHT+"px",this.currentCell.style[s]=this.cellIndex,this.renderCell(this.currentCell,this.cellIndex-1))):this.isScrollingDown||(this.currentCell=this.getCurrentCell(this.cellsOutOfViewportCount-1),this.isBottomCellOutOfView=this.isBottomElementOutOfViewport(this.currentCell),this.isBottomCellOutOfView&&this.cellsOutOfViewportCount>this.cellsWithinViewportCount&&(this.cellIndex=this.cells[this.cellsOutOfViewportCount--%this.cells.length].style[s]-1,this.elementStyle.paddingTop=parseInt(this.elementStyle.paddingTop||0,10)-this.CELLHEIGHT+"px",this.currentCell.style[s]=this.cellIndex,this.renderCell(this.currentCell,this.cellIndex-1))),h=n.scrollTop}}},{"./utils":2}],2:[function(e,t,l){var i=window.innerHeight,n=document.body,r=[].slice,s="webkitOrder"in n.style?"webkitOrder":"order",o=n.scrollTop,h=n.scrollTop;l.winHeight=i,l.body=n,l.slice=r,l.orderProp=s,l.scrollTop=o,l.lastScrollTop=h},{}]},{},[1])(1)});