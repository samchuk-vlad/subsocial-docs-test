(function() {var implementors = {};
implementors["sc_finality_grandpa"] = [{"text":"impl&lt;B, Block&gt; <a class=\"trait\" href=\"sc_network/chain/trait.FinalityProofProvider.html\" title=\"trait sc_network::chain::FinalityProofProvider\">FinalityProofProvider</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_finality_grandpa/struct.FinalityProofProvider.html\" title=\"struct sc_finality_grandpa::FinalityProofProvider\">FinalityProofProvider</a>&lt;B, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"sp_runtime/traits/type.NumberFor.html\" title=\"type sp_runtime::traits::NumberFor\">NumberFor</a>&lt;Block&gt;: <a class=\"trait\" href=\"sc_finality_grandpa/trait.BlockNumberOps.html\" title=\"trait sc_finality_grandpa::BlockNumberOps\">BlockNumberOps</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>","synthetic":false,"types":["sc_finality_grandpa::finality_proof::FinalityProofProvider"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()