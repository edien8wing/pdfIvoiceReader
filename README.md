# pdfIvoiceReader
使用pdfjs做的pdf发票内容识别，依次使用viewer.js识别发送到父组件/内容错误率比较高。
现在使用pdfjsLib->pdf->page->getTextContent的方式能读取大部分内容。
存在2个问题
1.部分中文乱码,猜测为字体文件错误，需要编辑\cmaps文件
2.不同发票的文字位置差距比较大，需要进一步优化坐标算法
