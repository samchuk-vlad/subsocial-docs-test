(function() {var implementors = {};
implementors["sc_finality_grandpa"] = [{"text":"impl&lt;BE, Block:&nbsp;<a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Client&gt; <a class=\"trait\" href=\"sp_consensus/block_import/trait.FinalityProofImport.html\" title=\"trait sp_consensus::block_import::FinalityProofImport\">FinalityProofImport</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_finality_grandpa/struct.GrandpaLightBlockImport.html\" title=\"struct sc_finality_grandpa::GrandpaLightBlockImport\">GrandpaLightBlockImport</a>&lt;BE, Block, Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"sp_runtime/traits/type.NumberFor.html\" title=\"type sp_runtime::traits::NumberFor\">NumberFor</a>&lt;Block&gt;: <a class=\"trait\" href=\"sc_finality_grandpa/trait.BlockNumberOps.html\" title=\"trait sc_finality_grandpa::BlockNumberOps\">BlockNumberOps</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"sp_runtime/traits/type.DigestFor.html\" title=\"type sp_runtime::traits::DigestFor\">DigestFor</a>&lt;Block&gt;: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>Client: <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;Block&gt; + <a class=\"trait\" href=\"sp_consensus/block_import/trait.BlockImport.html\" title=\"trait sp_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block, Error = <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">ConsensusError</a>, Transaction = <a class=\"type\" href=\"sc_client_api/backend/type.TransactionFor.html\" title=\"type sc_client_api::backend::TransactionFor\">TransactionFor</a>&lt;BE, Block&gt;&gt; + <a class=\"trait\" href=\"sc_client_api/backend/trait.Finalizer.html\" title=\"trait sc_client_api::backend::Finalizer\">Finalizer</a>&lt;Block, BE&gt; + <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a>,&nbsp;</span>","synthetic":false,"types":["sc_finality_grandpa::light_import::GrandpaLightBlockImport"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()