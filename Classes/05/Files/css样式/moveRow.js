			$(document).ready(function(){
			    var destRow=undefined,curtRow,chgRow=undefined,clickcount = 0;
				$('table td').each(function(){
					var currentTd = $(this);
					currentTd.click(function(){
						clickcount = clickcount + 1;
						var currentRow = currentTd.parent('tr');
						if(clickcount % 2 === 1){
							chgRow = currentRow;
							chgRow.addClass('bgColor');
						}
						else{
							destRow = currentRow;
						}
						if(chgRow !== undefined && destRow !== undefined){							
							if(chgRow.position().top < destRow.position().top){
									chgRow.insertAfter(destRow);
								}
								else if(chgRow.position().top > destRow.position().top){
									chgRow.insertBefore(destRow);
								}
							
							destRow = undefined;
							clickcount = 0;
							chgRow.removeClass('bgColor');
							chgRow = undefined;
						}
					});
				});
			});
			